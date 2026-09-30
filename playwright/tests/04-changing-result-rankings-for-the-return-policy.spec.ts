/**
 * Changing Result Rankings for the Return Policy
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

test('Changing Result Rankings for the Return Policy', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as Clarity Admin.
	await test.step('Step 1. Sign in as Clarity Admin.', async () => {
		await signIn(page, 'admin');
	});

	// Step 2. Navigate to Clarity's *Search page*.
	await test.step('Step 2. Navigate to Clarity\'s *Search page*.', async () => {
		await openSitePage(page, 'Search');
	});

	// Step 3. In the search bar, enter `return policy` and press Enter.
	await test.step('Step 3. In the search bar, enter `return policy` and press Enter.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/01.png']);
		await search(page, 'return policy');

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/01.png'});
	});

	// Step 4. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click *Result Rankings*.
	await test.step('Step 4. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Applications* tab, and click *Result Rankings*.', async () => {
		await openMenu(page, 'Global Menu', 'Applications', 'Result Rankings');
	});

	// Step 5. Click *New* and enter `return policy` into the Search Query field.
	await test.step('Step 5. Click *New* and enter `return policy` into the Search Query field.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/02.png']);
		await press(page, 'New');
		await fill(page, 'Search', 'return policy');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/02.png'});
	});

	// Step 6. Click *Customize Results*.
	await test.step('Step 6. Click *Customize Results*.', async () => {
		await press(page, 'Customize Results');
		await noConfirmationLeft(page);
	});

	// Step 7. Enter `returns` and `return policies` into the Aliases field.
	await test.step('Step 7. Enter `returns` and `return policies` into the Aliases field.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/03.png']);
		await fillEach(page, 'Aliases', ['returns', 'return policies']);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/03.png'});
	});

	// Step 8. Click *Pin Result* (![Pin](../../images/icon-pin.png)) for the "What is your return policy?" entry.
	await test.step('Step 8. Click *Pin Result* (![Pin](../../images/icon-pin.png)) for the "What is your return policy?" entry.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/04.png']);
		await press(page, 'Pin Result', '"What is your return policy?"', 'pin');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/04.png'});
	});

	// Step 9. Click *Hide Result* (![Hide Result](../../images/icon-hide.png)) for the "Cookie Policy" and "Privacy Policy" entries.
	await test.step('Step 9. Click *Hide Result* (![Hide Result](../../images/icon-hide.png)) for the "Cookie Policy" and "Privacy Policy" entries.', async () => {
		await armCapture(page, ['mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/05.png']);
		await press(page, 'Hide Result', '"Cookie Policy"', 'hide');
		await press(page, 'Hide Result', '"Privacy Policy"', 'hide');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-content-search/08-improving-claritys-search-results/00-improving-claritys-search-results/images/05.png'});
	});

	// Step 10. Click *Save*.
	await test.step('Step 10. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 11. Return to Clarity's *Search* page and search for `return policy` again.
	await test.step('Step 11. Return to Clarity\'s *Search* page and search for `return policy` again.', async () => {
		await openSitePage(page, 'Search');
		await search(page, 'return policy');
	});

	// Step 12. Confirm that the hidden articles no longer appear.
	// Not performed: it is a check of what the screen shows, which is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 12. Confirm that the hidden articles no longer appear. - not performed: it is a check of what the screen shows, which is not automated yet', async () => {});

});
