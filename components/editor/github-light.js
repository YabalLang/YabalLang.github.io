import * as monaco from 'monaco-editor';

monaco.editor.defineTheme('github-light', {
    "inherit": true,
    "base": "vs",
    "colors": {
        "focusBorder": "#ffffff00",
        "foreground": "#000000",
        "editor.background": "#ffffff",
        "editor.foreground": "#000000",
        "scrollbar.shadow": "#ffffff",
        "activityBar.border": "#ffffff",
        "activityBar.background": "#ffffff",
        "activityBar.foreground": "#000000",
        "activityBarBadge.background": "#d73a49",
        "statusBar.border": "#ffffff",
        "statusBar.background": "#ffffff",
        "statusBar.foreground": "#000000",
        "statusBar.noFolderBackground": "#ffffff",
        "statusBar.noFolderForeground": "#000000",
        "statusBar.debuggingBackground": "#ffffff",
        "statusBar.debuggingForeground": "#000000",
        "editorGroup.border": "#ffffff",
        "editorGroupHeader.tabsBackground": "#ffffff",
        "editorGroupHeader.noTabsBackground": "#ffffff",
        "editorGroupHeader.tabsBorder": "#ffffff",
        "tab.activeBackground": "#ffffff",
        "tab.inactiveBackground": "#ffffff",
        "tab.border": "#ffffff",
        "tab.activeBorder": "#d73a49",
        "sideBar.border": "#ffffff",
        "sideBar.background": "#ffffff",
        "sideBar.foreground": "#000000",
        "sideBarSectionHeader.background": "#ffffff",
        "list.highlightForeground": "#d73a49",
        "list.activeSelectionBackground": "#eeeeee",
        "list.activeSelectionForeground": "#d73a49",
        "list.inactiveSelectionBackground": "#eeeeee",
        "list.inactiveSelectionForeground": "#d73a49",
        "list.hoverBackground": "#eeeeee",
        "list.hoverForeground": "#d73a49",
        "list.focusBackground": "#eeeeee",
        "list.focusForeground": "#d73a49",
        "editor.lineHighlightBackground": "#fffbdf",
        "editor.lineHighlightBorder": "#fffbdf",
        "editorLineNumber.foreground": "#babbbc",
        "editorLineNumber.activeForeground": "#000000",
        "editor.selectionBackground": "#fed442",
        "input.border": "#b2b2b2",
        "input.background": "#ffffff",
        "inputOption.activeBorder": "#000000",
        "inputOption.activeForeground": "#000000",
        "dropdown.border": "#b2b2b2",
        "dropdown.background": "#ffffff",
        "dropdown.listBackground": "#ffffff",
        "notificationCenter.border": "#ffffff",
        "notificationCenterHeader.background": "#ffffff",
        "notificationToast.border": "#ffffff",
        "notifications.background": "#ffffff",
        "notifications.border": "#ffffff",
        "button.background": "#d73a49",
        "button.foreground": "#ffffff",
        "titleBar.border": "#ffffff",
        "titleBar.activeBackground": "#ffffff",
        "titleBar.activeForeground": "#000000",
        "titleBar.inactiveBackground": "#ffffff",
        "titleBar.inactiveForeground": "#000000",
        "editorWidget.background": "#ffffff",
        "editorWidget.border": "#000000",
        "editorSuggestWidget.highlightForeground": "#d73a49",
        "editorSuggestWidget.selectedBackground": "#f0f0f0",
        "panel.border": "#d73a49"
    },
    "rules": [
        {
            "foreground": "#6a737d",
            "token": "comment"
        },
        {
            "foreground": "#6a737d",
            "token": "punctuation.definition.comment"
        },
        {
            "foreground": "#6a737d",
            "token": "string.comment"
        },
        {
            "foreground": "#005cc5",
            "token": "constant"
        },
        {
            "foreground": "#005cc5",
            "token": "entity.name.constant"
        },
        {
            "foreground": "#005cc5",
            "token": "variable.other.constant"
        },
        {
            "foreground": "#005cc5",
            "token": "variable.language"
        },
        {
            "foreground": "#000000",
            "token": "keyword.operator.symbole"
        },
        {
            "foreground": "#000000",
            "token": "keyword.other.mark"
        },
        {
            "foreground": "#6f42c1",
            "token": "entity"
        },
        {
            "foreground": "#6f42c1",
            "token": "entity.name"
        },
        {
            "foreground": "#000000",
            "token": "variable.parameter.function"
        },
        {
            "foreground": "#22863a",
            "token": "entity.name.tag"
        },
        {
            "foreground": "#d73a49",
            "token": "keyword"
        },
        {
            "foreground": "#d73a49",
            "token": "storage"
        },
        {
            "foreground": "#d73a49",
            "token": "storage.type"
        },
        {
            "foreground": "#000000",
            "token": "storage.modifier.package"
        },
        {
            "foreground": "#000000",
            "token": "storage.modifier.import"
        },
        {
            "foreground": "#000000",
            "token": "storage.type.java"
        },
        {
            "foreground": "#032f62",
            "token": "string"
        },
        {
            "foreground": "#032f62",
            "token": "punctuation.definition.string"
        },
        {
            "foreground": "#032f62",
            "token": "string punctuation.section.embedded source"
        },
        {
            "token": "string.unquoted.import.ada"
        },
        {
            "foreground": "#005cc5",
            "token": "support"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.property-name"
        },
        {
            "foreground": "#e36209",
            "token": "variable"
        },
        {
            "foreground": "#000000",
            "token": "variable.other"
        },
        {
            "fontStyle": "bold italic underline",
            "foreground": "#b31d28",
            "token": "invalid.broken"
        },
        {
            "fontStyle": "bold italic underline",
            "foreground": "#b31d28",
            "token": "invalid.deprecated"
        },
        {
            "fontStyle": "italic underline",
            "foreground": "#b31d28",
            "token": "invalid.illegal"
        },
        {
            "fontStyle": "italic underline",
            "foreground": "#d73a49",
            "token": "carriage-return"
        },
        {
            "fontStyle": "bold italic underline",
            "foreground": "#b31d28",
            "token": "invalid.unimplemented"
        },
        {
            "foreground": "#b31d28",
            "token": "message.error"
        },
        {
            "foreground": "#000000",
            "token": "string source"
        },
        {
            "foreground": "#005cc5",
            "token": "string variable"
        },
        {
            "foreground": "#032f62",
            "token": "source.regexp"
        },
        {
            "foreground": "#032f62",
            "token": "string.regexp"
        },
        {
            "foreground": "#032f62",
            "token": "string.regexp.character-class"
        },
        {
            "foreground": "#032f62",
            "token": "string.regexp constant.character.escape"
        },
        {
            "foreground": "#032f62",
            "token": "string.regexp source.ruby.embedded"
        },
        {
            "foreground": "#032f62",
            "token": "string.regexp string.regexp.arbitrary-repitition"
        },
        {
            "fontStyle": "bold",
            "foreground": "#22863a",
            "token": "string.regexp constant.character.escape"
        },
        {
            "foreground": "#005cc5",
            "token": "support.constant"
        },
        {
            "foreground": "#005cc5",
            "token": "support.variable"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.module-reference"
        },
        {
            "foreground": "#735c0f",
            "token": "markup.list"
        },
        {
            "fontStyle": "bold",
            "foreground": "#005cc5",
            "token": "markup.heading"
        },
        {
            "fontStyle": "bold",
            "foreground": "#005cc5",
            "token": "markup.heading entity.name"
        },
        {
            "foreground": "#22863a",
            "token": "markup.quote"
        },
        {
            "fontStyle": "italic",
            "foreground": "#000000",
            "token": "markup.italic"
        },
        {
            "fontStyle": "bold",
            "foreground": "#000000",
            "token": "markup.bold"
        },
        {
            "foreground": "#005cc5",
            "token": "markup.raw"
        },
        {
            "foreground": "#b31d28",
            "token": "markup.deleted"
        },
        {
            "foreground": "#b31d28",
            "token": "meta.diff.header.from-file"
        },
        {
            "foreground": "#b31d28",
            "token": "punctuation.definition.deleted"
        },
        {
            "foreground": "#22863a",
            "token": "markup.inserted"
        },
        {
            "foreground": "#22863a",
            "token": "meta.diff.header.to-file"
        },
        {
            "foreground": "#22863a",
            "token": "punctuation.definition.inserted"
        },
        {
            "foreground": "#e36209",
            "token": "markup.changed"
        },
        {
            "foreground": "#e36209",
            "token": "punctuation.definition.changed"
        },
        {
            "foreground": "#005cc5",
            "token": "markup.ignored"
        },
        {
            "foreground": "#005cc5",
            "token": "markup.untracked"
        },
        {
            "foreground": "#6f42c1",
            "fontStyle": "bold",
            "token": "meta.diff.range"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.diff.header"
        },
        {
            "fontStyle": "bold",
            "foreground": "#005cc5",
            "token": "meta.separator"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.output"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.tag"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.curly"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.round"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.square"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.angle"
        },
        {
            "foreground": "#586069",
            "token": "brackethighlighter.quote"
        },
        {
            "foreground": "#b31d28",
            "token": "brackethighlighter.unmatched"
        },
        {
            "foreground": "#b31d28",
            "token": "sublimelinter.mark.error"
        },
        {
            "foreground": "#e36209",
            "token": "sublimelinter.mark.warning"
        },
        {
            "foreground": "#959da5",
            "token": "sublimelinter.gutter-mark"
        },
        {
            "foreground": "#032f62",
            "fontStyle": "underline",
            "token": "constant.other.reference.link"
        },
        {
            "foreground": "#032f62",
            "fontStyle": "underline",
            "token": "string.other.link"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.function-call support.function"
        },
        {
            "foreground": "#005cc5",
            "token": "meta.function-call entity.name.function"
        },
        {
            "foreground": "#000000",
            "token": "keyword.operator"
        }
    ],
    "encodedTokensColors": []
});