'use client'

import '@lunagraph/editor/styles.css';
import { LunagraphEditor, LUCIDE_PROPS_SCHEMA } from "@lunagraph/editor";
import * as lunagraph from '../../.lunagraph/components';
import { snapshots, internalComponents } from '../../.lunagraph/snapshots';
import * as LucideIcons from "lucide-react";

export default function EditorReadOnly() {
  return (
    <LunagraphEditor
      {...lunagraph}
      components={{ ...lunagraph.components, ...internalComponents }}
      snapshots={snapshots}
      iconLibraries={{
        "lucide-react": {
          icons: LucideIcons,
          displayName: "Lucide",
          defaultProps: { size: 24 },
          propsSchema: LUCIDE_PROPS_SCHEMA,
        }
      }}
      readOnly
    />
  )
}
