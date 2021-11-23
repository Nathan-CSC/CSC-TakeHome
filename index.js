const _ = require('lodash');

/*
 * List of assumptions for this code per the challenge notes
 *
 * - The input will always be solvable (there will be no missing parents)
 * - The input will always be valid JSON in the format of the example below, with no additional data
 * - There may be more than one root category (a category with no parents)  
 * 
 */

module.exports = {
    sortCategoriesForInsertWithLibraries: function (inputJson) {
        let unsortedItems = Array.isArray(inputJson) ? inputJson : JSON.parse(inputJson); // Sanity check
        return _.sortBy(unsortedItems, ['id','parent_id'])
    },
    sortCategoriesForInsert: function (inputJson) {
        let unsortedItems = Array.isArray(inputJson) ? inputJson : JSON.parse(inputJson); // Sanity check
        return unsortedItems.sort((first,second) => (first.parent_id == null || second.parent_id == null) ? 0 : ((second.parent_id > first.id) ? -1 : 1));
    }
}
