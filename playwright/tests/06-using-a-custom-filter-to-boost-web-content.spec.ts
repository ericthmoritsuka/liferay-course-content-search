/**
 * Using a Custom Filter to Boost Web Content
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

test('Using a Custom Filter to Boost Web Content', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While on the Search page, search for `specs` again.
	await test.step('Step 1. While on the Search page, search for `specs` again.', async () => {
		await openSitePage(page, 'Search');
		await search(page, 'specs');
	});

	// Step 2. Click *Edit* (![](../../images/icon-edit.png)).
	await test.step('Step 2. Click *Edit* (![](../../images/icon-edit.png)).', async () => {
		await press(page, 'Edit', undefined, 'edit');
		await noConfirmationLeft(page);
	});

	// Step 3. Drag and drop the *Custom Filter* widget above the Search Results widget.
	await test.step('Step 3. Drag and drop the *Custom Filter* widget above the Search Results widget.', async () => {
		await addComponent(page, 'Custom Filter');
		test.info().annotations.push({type: 'substituted', description: 'Custom Filter was added where the editor puts it, not above the search results widget'});
	});

	// Step 4. Click *Actions* (![](../../images/icon-actions.png)) for the Custom Filter widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).
	await test.step('Step 4. Click *Actions* (![](../../images/icon-actions.png)) for the Custom Filter widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/10.png']);
		await selectInEditor(page, 'Custom Filter');
		await fragmentOption(page, 'Configuration');

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/10.png'});
	});

	// Step 5. For the Filter Field, enter `entryClassName`.
	await test.step('Step 5. For the Filter Field, enter `entryClassName`.', async () => {
		await fill(page, 'Filter Field', 'entryClassName');
	});

	// Step 6. For the Filter Value, enter `com.liferay.journal.model.JournalArticle`.
	await test.step('Step 6. For the Filter Value, enter `com.liferay.journal.model.JournalArticle`.', async () => {
		await fill(page, 'Filter Value', 'com.liferay.journal.model.JournalArticle');
	});

	// Step 7. For the Filter Query Type, select *Match*.
	await test.step('Step 7. For the Filter Query Type, select *Match*.', async () => {
		await choose(page, 'Filter Query Type', 'Match');
	});

	// Step 8. For the Occur, select *Should*.
	await test.step('Step 8. For the Occur, select *Should*.', async () => {
		await choose(page, 'Occur', 'Should');
	});

	// Step 9. For the Boost, enter `100`.
	await test.step('Step 9. For the Boost, enter `100`.', async () => {
		await fill(page, 'Boost', '100');
	});

	// Step 10. Scroll down and enable the *Invisible* checkbox.
	await test.step('Step 10. Scroll down and enable the *Invisible* checkbox.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/11.png']);
		await toggle(page, 'Invisible', true);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/11.png'});
	});

	// Step 11. Click *Save* and close the Configuration window.
	await test.step('Step 11. Click *Save* and close the Configuration window.', async () => {
		await press(page, 'Save');
		await closeModal(page);
		await noConfirmationLeft(page);
	});

	// Step 12. Click *Publish*.
	await test.step('Step 12. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 13. Search for `specs` again and verify web content articles are prioritized over blog entries.
	await test.step('Step 13. Search for `specs` again and verify web content articles are prioritized over blog entries.', async () => {
		test.info().annotations.push({type: 'not-performed', description: 'checking what the results show'});
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/12.png']);
		await search(page, 'specs');
		// Not performed: checking what the results show.

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/12.png'});
	});

});
