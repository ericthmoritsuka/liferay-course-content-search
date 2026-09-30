/**
 * Reindex All Search Content
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

test('Reindex All Search Content', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as Clarity Admin.
	await test.step('Step 1. Sign in as Clarity Admin.', async () => {
		await signIn(page, 'admin');
	});

	// Step 2. Navigate to the *Search* page.
	await test.step('Step 2. Navigate to the *Search* page.', async () => {
		await openSitePage(page, 'Search');
	});

	// Step 3. Open a new browser tab and ensure you're signed in as Clarity Admin.
	// Not performed: it needs a second browser tab, which the tests do not drive yet.
	await test.step.skip('Step 3. Open a new browser tab and ensure you\'re signed in as Clarity Admin. - not performed: it needs a second browser tab, which the tests do not drive yet', async () => {});

	// Step 4. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and click *Search*.
	await test.step('Step 4. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and click *Search*.', async () => {
		await openMenu(page, 'Global Menu', 'Control Panel', 'Search');
	});

	// Step 5. Go to the *Index Actions* tab.
	await test.step('Step 5. Go to the *Index Actions* tab.', async () => {
		await press(page, 'Index Actions');
		await noConfirmationLeft(page);
	});

	// Step 6. Set Reindex Mode to *Concurrent*.
	await test.step('Step 6. Set Reindex Mode to *Concurrent*.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/01.png']);
		await choose(page, 'Reindex Mode', 'Concurrent');

		await capture(page, {name: 'mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/01.png'});
	});

	// Step 7. Click *Reindex* next to All Search Indexes.
	await test.step('Step 7. Click *Reindex* next to All Search Indexes.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/02.png']);
		await press(page, 'Reindex', 'All Search Indexes');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/10-troubleshooting-claritys-search-issues/00-troubleshooting-claritys-search-issues/images/02.png'});
	});

	// Step 8. While reindexing is in progress, return to your Search page tab and search for `specs`. Observe the results displayed.
	// Not performed: it needs a second browser tab, which the tests do not drive yet.
	await test.step.skip('Step 8. While reindexing is in progress, return to your Search page tab and search for `specs`. Observe the results displayed. - not performed: it needs a second browser tab, which the tests do not drive yet', async () => {});

	// Step 9. After reindexing completes, search for `specs` again. Notice that the results remain available.
	await test.step('Step 9. After reindexing completes, search for `specs` again. Notice that the results remain available.', async () => {
		test.info().annotations.push({type: 'not-performed', description: 'checking what the results show'});
		await waitForReindex(page);
		await search(page, 'specs');
		// Not performed: checking what the results show.
	});

});
