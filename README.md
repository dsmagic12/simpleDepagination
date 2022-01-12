# simpleDepagination
Combines a paginated HTML table into a single big table in a new window
May need you to bypass cross-orgin scripting rules in your browser

## The top of the file defines some selectors
- var selTable = "TABLE[summary='LongList']"; `the selector for the HTML table to combine`
- var selPaginationWrapper = "#scriptPagingWPQ1"; `the selector for the wrapper around the pagination controls`
- var selPaginationNext = "A[title='Next']"; `the selector for the button to get the next page`
