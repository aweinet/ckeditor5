/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.

import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline/inlineeditor';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/paragraph';
import { Clipboard } from '@ckeditor/ckeditor5-clipboard/clipboard';
import { Enter, ShiftEnter } from '@ckeditor/ckeditor5-enter/enter';
import { Typing } from '@ckeditor/ckeditor5-typing/typing';
import { Undo } from '@ckeditor/ckeditor5-undo/undo';
import { SelectAll } from '@ckeditor/ckeditor5-select-all/selectall';

export default class InlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
InlineEditor.builtinPlugins = [
	Clipboard,
	Enter,
	Paragraph,
	SelectAll,
	ShiftEnter,
	Typing,
	Undo
];

// Editor configuration.
InlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'undo',
			'redo'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};