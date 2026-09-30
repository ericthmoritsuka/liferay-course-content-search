/**
 * Filtering Search Results by Publication Date
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

test('Filtering Search Results by Publication Date', async ({page}) => {
	await signIn(page, 'admin');

	//
	// This exercise continues from the one before it, which left a
	// screen open that a fresh browser does not have.
	//
	await openPageSettings(page, 'Search');

	// Step 1. While editing the Search page, open the *Components* tab in the left side panel and search for `Custom Facet`.
	await test.step('Step 1. While editing the Search page, open the *Components* tab in the left side panel and search for `Custom Facet`.', async () => {
		await openPageEditor(page, 'Search');
		await press(page, 'Components');
		await noConfirmationLeft(page);
	});

	// Step 2. Drag and drop the *Custom Facet* widget below the Type Facet widget.
	await test.step('Step 2. Drag and drop the *Custom Facet* widget below the Type Facet widget.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/05.png']);
		await addComponent(page, 'Custom Facet');
		test.info().annotations.push({type: 'substituted', description: 'Custom Facet was added where the editor puts it, not below the type facet widget'});

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/05.png'});
	});

	// Step 3. Click *Actions* (![](../../images/icon-actions.png)) for the Custom Facet widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).
	await test.step('Step 3. Click *Actions* (![](../../images/icon-actions.png)) for the Custom Facet widget and select *Configuration* (![Configuration](../../images/icon-cog.png)).', async () => {
		await selectInEditor(page, 'Custom Facet');
		await fragmentOption(page, 'Configuration');
	});

	// Step 4. For Aggregation Type, select *Date Range*.
	await test.step('Step 4. For Aggregation Type, select *Date Range*.', async () => {
		await choose(page, 'Aggregation Type', 'Date Range');
	});

	// Step 5. For Aggregation Field, enter `displayDate`.
	await test.step('Step 5. For Aggregation Field, enter `displayDate`.', async () => {
		await fill(page, 'Aggregation Field', 'displayDate');
	});

	// Step 6. For Custom Heading, enter `Display Date`.
	await test.step('Step 6. For Custom Heading, enter `Display Date`.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/06.png']);
		await fill(page, 'Custom Heading', 'Display Date');

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/06.png'});
	});

	// Step 7. In the Ranges Configuration section, remove all but two ranges and enter these values for them:
	// Not entered: `2025`, `2024` - a list of items to create, one per row, not fields to fill.
	await test.step.skip('Step 7. In the Ranges Configuration section, remove all but two ranges and enter these values for them: - not performed', async () => {});

	// Step 8. Click *Save* and close the Configuration window.
	await test.step('Step 8. Click *Save* and close the Configuration window.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/07.png']);
		await press(page, 'Save');
		await closeModal(page);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/07.png'});
	});

	// Step 9. Click *Publish*.
	await test.step('Step 9. Click *Publish*.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/08.png']);
		await press(page, 'Publish');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/08.png'});
	});

});
