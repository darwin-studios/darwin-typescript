import type * as Darwin from '../../../../index.js';

/**
 * @example
 *     {
 *         id: "id",
 *         body: {}
 *     }
 */
export interface RequestTaskPublicationRequest {
  id: string;
  body: Darwin.PublicationRequest;
}
