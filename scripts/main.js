const textArea = getElement('text-area');

const boldBtn = getElement('font-bold-btn');
const italicBtn = getElement('font-italic-btn');
const underlineBtn = getElement('font-underline-btn');

const alignLeftBtn = getElement('align-left-btn');
const alignCenterBtn = getElement('align-center-btn');
const alignRightBtn = getElement('align-right-btn');
const alignJustifyBtn = getElement('align-justify-btn');

const colorSelector = getElement('palette-btn');

const cancelBtn = getElement('cancel-btn');
const saveBtn = getElement('save-btn');

boldBtn.addEventListener('click', () => textStyle('bold'));
italicBtn.addEventListener('click', () => textStyle('italic'));
underlineBtn.addEventListener('click', () => textStyle('underline'));

alignLeftBtn.addEventListener('click', () => textAlign('left'));
alignCenterBtn.addEventListener('click', () => textAlign('center'));
alignRightBtn.addEventListener('click', () => textAlign('right'));
alignJustifyBtn.addEventListener('click', () => textAlign('justify'));

colorSelector.addEventListener('input', (e) => colorPalette(e.target.value));

cancelBtn.addEventListener('click', () => cancelBtnHandler());
saveBtn.addEventListener('click', () => saveBtnHandler());
