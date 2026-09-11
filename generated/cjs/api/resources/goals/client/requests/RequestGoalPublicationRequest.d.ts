import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {}
 *     }
 */
export interface RequestGoalPublicationRequest {
  id: string;
  body: Darwin.PublicationRequest;
}
