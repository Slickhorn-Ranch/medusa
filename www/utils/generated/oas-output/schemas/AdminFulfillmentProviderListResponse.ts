/**
 * @schema AdminFulfillmentProviderListResponse
 * type: object
 * description: The paginated list of fulfillment providers.
 * x-schemaName: AdminFulfillmentProviderListResponse
 * required:
 *   - limit
 *   - offset
 *   - count
 *   - fulfillment_providers
 * properties:
 *   limit:
 *     type: number
 *     title: limit
 *     description: The maximum number of items returned.
 *   offset:
 *     type: number
 *     title: offset
 *     description: The number of items skipped before retrieving the returned items.
 *   count:
 *     type: number
 *     title: count
 *     description: The total count of items.
 *   fulfillment_providers:
 *     type: array
 *     description: The list of fulfillment providers.
 *     items:
 *       $ref: "#/components/schemas/AdminFulfillmentProvider"
 * 
*/
