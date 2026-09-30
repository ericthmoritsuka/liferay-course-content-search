/**
 * Optimizing the Search Page
 *
 * Generated from courses/latest/en/mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience.md.
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

test('Optimizing the Search Page', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity administrator.
	await test.step('Step 1. Sign in as the Clarity administrator.', async () => {
		await signIn(page, 'admin');
	});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await test.step('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');
	});

	// Step 3. Click *Actions* (![](../../images/icon-actions.png)) for the Search page and select *View*.
	await test.step('Step 3. Click *Actions* (![](../../images/icon-actions.png)) for the Search page and select *View*.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/01.png']);
		await press(page, 'Actions', 'Search', 'actions');
		await press(page, 'View');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/01.png'});
	});

	// Step 4. Once the page loads, locate these key widgets: Search Bar (1), Type Facet (2), and Search Results (3).
	// Not performed: the step does not name a field and a value plainly enough.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 4. Once the page loads, locate these key widgets: Search Bar (1), Type Facet (2), and Search Results (3). - not performed: the step does not name a field and a value plainly enough', async () => {});

	// Step 5. Click *Edit* (![](../../images/icon-edit.png)) for the Search page.
	await test.step('Step 5. Click *Edit* (![](../../images/icon-edit.png)) for the Search page.', async () => {
		await press(page, 'Edit', 'Search', 'edit');
		await noConfirmationLeft(page);
	});

	// Step 6. Click *Actions* (![](../../images/icon-actions.png)) for the Search Results widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).
	await test.step('Step 6. Click *Actions* (![](../../images/icon-actions.png)) for the Search Results widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).', async () => {
		await selectInEditor(page, 'Search Results');
		await fragmentOption(page, 'Configuration');
	});

	// Step 7. Click the *Display Template* drop-down menu and select *List Layout*.
	await test.step('Step 7. Click the *Display Template* drop-down menu and select *List Layout*.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/03.png']);
		await choose(page, 'Display Template', 'List Layout');

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/03.png'});
	});

	// Step 8. Click *Save* and close the Configuration window.
	await test.step('Step 8. Click *Save* and close the Configuration window.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/04.png']);
		await press(page, 'Save');
		await closeModal(page);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/04.png'});
	});

});
