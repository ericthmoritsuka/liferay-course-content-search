/**
 * Use the Search Insights Widget
 *
 * Generated from courses/latest/en/mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {addComponent, attach, choose, closeModal, download, enableSomeOptions, fill, fillEach, fragmentOption, goHome, noConfirmationLeft, openFromPageTree, openMenu, openSitePage, openPageEditor, openPageSettings, press, pressKeys, reload, reorderMenu, search, selectInEditor, toggle, transfer, verifyHead, visitAsGuest, visitInNewBrowser, waitForReindex} from '../helpers/liferay';
import {CAPTURE, armCapture, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Use the Search Insights Widget', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While on the Search page, click *Edit* (![](../../images/icon-edit.png)).
	await test.step('Step 1. While on the Search page, click *Edit* (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Search');
		await press(page, 'Edit', undefined, 'edit');
		await noConfirmationLeft(page);
	});

	// Step 2. Drag and drop the Search Insights widget to the bottom of the page.
	await test.step('Step 2. Drag and drop the Search Insights widget to the bottom of the page.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/03.png']);
		await addComponent(page, 'Search Insights');

		await capture(page, {name: 'mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/03.png'});
	});

	// Step 3. Click *Publish*.
	await test.step('Step 3. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 4. Search for `eye health`.
	await test.step('Step 4. Search for `eye health`.', async () => {
		await search(page, 'eye health');
	});

	// Step 5. Scroll down to the Search Insights widget.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 5. Scroll down to the Search Insights widget. - not performed: no control or value named in this step', async () => {});

	// Step 6. Review the first several lines of the JSON query sent in the request.
	// Not performed: it is a check of what the screen shows, which is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 6. Review the first several lines of the JSON query sent in the request. - not performed: it is a check of what the screen shows, which is not automated yet', async () => {});

	// Step 7. Click *Edit* (![](../../images/icon-edit.png)) and remove the Search Insights widget from the page.
	await test.step('Step 7. Click *Edit* (![](../../images/icon-edit.png)) and remove the Search Insights widget from the page.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/05.png']);
		await press(page, 'Edit');
		await selectInEditor(page, 'Search Insights');
		await fragmentOption(page, 'Delete');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/05.png'});
	});

});
