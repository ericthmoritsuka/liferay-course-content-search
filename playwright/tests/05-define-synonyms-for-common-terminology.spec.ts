/**
 * Define Synonyms for Common Terminology
 *
 * Generated from courses/latest/en/mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results.md.
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

test('Define Synonyms for Common Terminology', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), click *Page Tree*, and click *Search*.
	await test.step('Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), click *Page Tree*, and click *Search*.', async () => {
		await openFromPageTree(page, ['Search']);
	});

	// Step 2. In the search bar, enter `specs` and press Enter.
	await test.step('Step 2. In the search bar, enter `specs` and press Enter.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/07.png']);
		await search(page, 'specs');

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/07.png'});
	});

	// Step 3. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click *Synonyms*.
	await test.step('Step 3. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click *Synonyms*.', async () => {
		await openMenu(page, 'Global Menu', 'Applications', 'Synonyms');
	});

	// Step 4. Click *New*.
	await test.step('Step 4. Click *New*.', async () => {
		await press(page, 'New');
		await noConfirmationLeft(page);
	});

	// Step 5. For Synonyms, enter `specs`, `spectacles`, and `glasses`.
	await test.step('Step 5. For Synonyms, enter `specs`, `spectacles`, and `glasses`.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/08.png']);
		await fillEach(page, 'Synonyms', ['specs', 'spectacles', 'glasses']);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/08.png'});
	});

	// Step 6. Click *Publish*.
	await test.step('Step 6. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 7. Return to Clarity's *Search* page and search for `specs` again.
	await test.step('Step 7. Return to Clarity\'s *Search* page and search for `specs` again.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/09.png']);
		await openSitePage(page, 'Search');
		await search(page, 'specs');

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/09.png'});
	});

});
