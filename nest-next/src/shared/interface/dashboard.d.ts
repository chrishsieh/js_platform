export interface DashboardItemInterface {
  // must be all one word - no spaces
  getDashboardItemName(): string;

  // when provided with the page name of the user context,
  // return true or false if this item should be loaded / provided in AJAX updates.
  shouldInclude(PageName: string): boolean;

  // return a PHP array with all of the values to be passed to the renderer
  getDashboardItemValue(): {};
}
