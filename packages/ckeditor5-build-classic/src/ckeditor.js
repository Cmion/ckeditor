/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import MathType from '@wiris/mathtype-ckeditor5';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import ExportPdf from '@ckeditor/ckeditor5-export-pdf/src/exportpdf';

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	PageBreak,
	ExportPdf,
	Highlight,
	FindAndReplace,
	Font,
	FontFamily,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	MathType
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'fontfamily',
			'fontsize',
			'|',
			'alignment:left', 'alignment:right', 'alignment:center', 'alignment:justify',
			'|',
			'fontColor',
			'fontBackgroundColor',
			'|',
			'bold',
			'italic',
			'strikethrough',
			'underline',
			'subscript',
			'superscript',
			'|',
			'link',
			'|',
			'outdent',
			'indent',
			'|',
			'bulletedList',
			'numberedList',
			'todoList',
			'|',
			'code',
			'|',
			'insertTable',
			'|',
			'uploadImage',
			'mediaEmbed',
			'blockQuote',
			'|',
			'undo',
			'redo', '|', 'horizontalLine', 'MathType', 'ChemType', 'pageBreak', 'findAndReplace', 'highlight', '|', 'exportPdf'
		]
	},
	image: {
		toolbar: [
			'imageStyle:inline',
			'imageStyle:block',
			'imageStyle:side',
			'|',
			'toggleImageCaption',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	blockToolbar: [
		'paragraph',
		'heading1',
		'heading2',
		'heading3',
		'|',
		'bulletedList',
		'numberedList',
		'|',
		'blockQuote',
		'uploadImage',
	],
	fontFamily: {
		options: [
			'default',
			'Ubuntu, Arial, sans-serif',
			'Ubuntu Mono, Courier New, Courier, monospace',
		],
		supportAllValues: true,
	},
	fontSize: {
		options: [9, 11, 13, 'default', 17, 19, 21],
		supportAllValues: true,
	},
	fontColor: {
		columns: 3,
		documentColors: 12,
		colors: [
			{
				color: 'hsl(0, 0%, 0%)',
				label: 'Black',
			},
			{
				color: 'hsl(0, 0%, 30%)',
				label: 'Dim grey',
			},
			{
				color: 'hsl(0, 0%, 60%)',
				label: 'Grey',
			},
			{
				color: 'hsl(0, 0%, 90%)',
				label: 'Light grey',
			},
			{
				color: 'hsl(0, 0%, 100%)',
				label: 'White',
				hasBorder: true,
			},
		],
	},
	highlight: {
		options: [
			{ model: 'yellowMarker', class: 'marker-yellow', title: 'Yellow Marker', color: 'var(--ck-highlight-marker-yellow)', type: 'marker' },
			{ model: 'greenMarker', class: 'marker-green', title: 'Green marker', color: 'var(--ck-highlight-marker-green)', type: 'marker' },
			{ model: 'pinkMarker', class: 'marker-pink', title: 'Pink marker', color: 'var(--ck-highlight-marker-pink)', type: 'marker' },
			{ model: 'blueMarker', class: 'marker-blue', title: 'Blue marker', color: 'var(--ck-highlight-marker-blue)', type: 'marker' },
			{ model: 'redPen', class: 'pen-red', title: 'Red pen', color: 'var(--ck-highlight-pen-red)', type: 'pen' },
			{ model: 'greenPen', class: 'pen-green', title: 'Green pen', color: 'var(--ck-highlight-pen-green)', type: 'pen' }
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
