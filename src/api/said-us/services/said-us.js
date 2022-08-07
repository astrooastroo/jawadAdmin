'use strict';

/**
 * said-us service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::said-us.said-us');
