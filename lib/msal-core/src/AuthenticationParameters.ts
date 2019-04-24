// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { Account } from "./Account";
import { ClientConfigurationError } from "./error/ClientConfigurationError";

/**
 * Key-Value type to support queryParams and extraQueryParams
 */
export type QPDict = {[key: string]: string};

export type AuthenticationParameters = {
    scopes?: Array<string>;
    extraScopesToConsent?: Array<string>;
    prompt?: string;
    extraQueryParameters?: QPDict;
    claimsRequest?: string;
    authority?: string;
    correlationId?: string;
    account?: Account;
    sid?: string;
    loginHint?: string;
};

export function validateClaimsRequest(request: AuthenticationParameters) {
    if (!request.claimsRequest) {
        return;
    }
    let claims;
    try {
        claims = JSON.parse(request.claimsRequest);
    } catch (e) {
        throw ClientConfigurationError.createClaimsRequestParsingError(e);
    }

}
