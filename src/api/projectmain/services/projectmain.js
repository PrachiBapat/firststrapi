'use strict';

/**
 * projectmain service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::projectmain.projectmain');
