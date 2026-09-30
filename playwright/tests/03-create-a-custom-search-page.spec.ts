/**
 * Create a Custom Search Page
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

test('Create a Custom Search Page', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await test.step('Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');
	});

	// Step 2. Click *New* and select *Primary Master Page*.
	await test.step('Step 2. Click *New* and select *Primary Master Page*.', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await noConfirmationLeft(page);
	});

	// Step 3. For Name, enter `Custom Search` and click *Add*.
	await test.step('Step 3. For Name, enter `Custom Search` and click *Add*.', async () => {
		await fill(page, 'Name', 'Custom Search');
		await press(page, 'Add');
		await noConfirmationLeft(page);
	});

	// Step 4. Drag and drop a *Container* fragment onto the page.
	await test.step('Step 4. Drag and drop a *Container* fragment onto the page.', async () => {
		await addComponent(page, 'Container');
	});

	// Step 5. Select the new *container* and configure these settings in the *Styles* tab:
	await test.step('Step 5. Select the new *container* and configure these settings in the *Styles* tab:', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/09.png']);
		await selectInEditor(page, 'Container', undefined, 'last');
		await press(page, 'Styles');
		await choose(page, 'Padding Left', 'Spacer 4 - 1.5 rem');
		await choose(page, 'Padding Right', 'Spacer 4 - 1.5 rem');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/09.png'});
	});

	// Step 6. Drag and drop the *Search Bar* widget inside the container.
	await test.step('Step 6. Drag and drop the *Search Bar* widget inside the container.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/10.png']);
		await addComponent(page, 'Search Bar', 'container');

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/10.png'});
	});

	// Step 7. Drag and drop a *Grid* fragment below the Search Bar.
	await test.step('Step 7. Drag and drop a *Grid* fragment below the Search Bar.', async () => {
		await addComponent(page, 'Grid');
		test.info().annotations.push({type: 'substituted', description: 'Grid was added where the editor puts it, not below the search bar'});
	});

	// Step 8. Select the new *grid*, set *Number of Modules* to `2`, and resize the left module to be 9/12 width.
	await test.step('Step 8. Select the new *grid*, set *Number of Modules* to `2`, and resize the left module to be 9/12 width.', async () => {
		test.info().annotations.push({type: 'not-performed', description: 'resizing a module by dragging its edge'});
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/11.png']);
		await selectInEditor(page, 'Grid', undefined, 'last');
		await fill(page, 'Number of Modules', '2');
		// Not performed: resizing a module by dragging its edge.

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/11.png'});
	});

	// Step 9. From the Search widget category, drag the *Search Results* widget to the left module.
	await test.step('Step 9. From the Search widget category, drag the *Search Results* widget to the left module.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/12.png']);
		await addComponent(page, 'Search Results');
		test.info().annotations.push({type: 'substituted', description: 'Search Results was added where the editor puts it, not to the left module'});

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/12.png'});
	});

	// Step 10. Into the right module, drag and drop these facet widgets:
	await test.step('Step 10. Into the right module, drag and drop these facet widgets:', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/13.png']);
		await addComponent(page, 'Category Facet');
		await addComponent(page, 'Tag Facet');
		await addComponent(page, 'Type Facet');
		test.info().annotations.push({type: 'substituted', description: 'Category Facet, Tag Facet, Type Facet were added where the editor puts them, not into the right module'});

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/13.png'});
	});

	// Step 11. Drag and drop the *Search Options* widget below the grid.
	await test.step('Step 11. Drag and drop the *Search Options* widget below the grid.', async () => {
		await addComponent(page, 'Search Options');
		test.info().annotations.push({type: 'substituted', description: 'Search Options was added where the editor puts it, not below the grid'});
	});

	// Step 12. Drag and drop the *Blueprints Options* widget below the grid.
	await test.step('Step 12. Drag and drop the *Blueprints Options* widget below the grid.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/14.png']);
		await addComponent(page, 'Blueprints Options');
		test.info().annotations.push({type: 'substituted', description: 'Blueprints Options was added where the editor puts it, not below the grid'});

		await capture(page, {name: 'mastering-liferay-content-search/06-enhancing-claritys-search-experience/00-enhancing-claritys-search-experience/images/14.png'});
	});

	// Step 13. Click *Publish* and navigate to the page at: [http://localhost:8080/web/clarity/custom-search](http://localhost:8080/web/clarity/custom-search).
	await test.step('Step 13. Click *Publish* and navigate to the page at: [http://localhost:8080/web/clarity/custom-search](http://localhost:8080/web/clarity/custom-search).', async () => {
		await press(page, 'Publish');
		await page.goto('/web/clarity/custom-search');
		await noConfirmationLeft(page);
	});

	// Step 14. Run a few searches and test the facets to ensure the results update correctly.
	// Not performed: it is a check of what the screen shows, which is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 14. Run a few searches and test the facets to ensure the results update correctly. - not performed: it is a check of what the screen shows, which is not automated yet', async () => {});

});
