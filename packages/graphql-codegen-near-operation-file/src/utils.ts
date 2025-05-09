/* eslint-disable import/no-cycle */
import type { DocumentNode, FragmentDefinitionNode, FragmentSpreadNode } from 'graphql'
import { visit } from 'graphql'
import parsePath from 'parse-filepath'
import { join } from 'path'
import type { FragmentRegistry } from './fragment-resolver'

export function defineFilepathSubfolder(baseFilePath: string, folder: string) {
  const parsedPath = parsePath(baseFilePath)
  return join(parsedPath.dir, folder, parsedPath.base).replace(/\\/g, '/')
}

export function appendExtensionToFilePath(baseFilePath: string, extension: string) {
  const parsedPath = parsePath(baseFilePath)

  return join(parsedPath.dir, parsedPath.name + extension).replace(/\\/g, '/')
}

export function extractExternalFragmentsInUse(
  documentNode: DocumentNode | FragmentDefinitionNode,
  fragmentNameToFile: FragmentRegistry,
  result: { [fragmentName: string]: number } = {},
  level = 0,
): { [fragmentName: string]: number } {
  const ignoreList: Set<string> = new Set()

  // First, take all fragments definition from the current file, and mark them as ignored
  visit(documentNode, {
    FragmentDefinition: (node: FragmentDefinitionNode) => {
      ignoreList.add(node.name.value)
    },
  })

  // Then, look for all used fragments in this document
  visit(documentNode, {
    FragmentSpread: (node: FragmentSpreadNode) => {
      if (!ignoreList.has(node.name.value)) {
        if (
          result[node.name.value] === undefined ||
          (result[node.name.value] !== undefined && level < result[node.name.value])
        ) {
          result[node.name.value] = level

          if (fragmentNameToFile[node.name.value]) {
            extractExternalFragmentsInUse(
              fragmentNameToFile[node.name.value].node,
              fragmentNameToFile,
              result,
              level + 1,
            )
          }
        }
      }
    },
  })

  return result
}
