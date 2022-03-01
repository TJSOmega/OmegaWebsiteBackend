'use strict';

/**
 *  contact-form controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::contact-form.contact-form', ({ strapi }) => ({

    async create(ctx) {

        const response = await super.create(ctx);

        console.log("HERE IS OUR RESONSE", response)
        // some more logic

        const email = response.data.attributes

        await strapi.plugins['email'].services.email.send({
            to: 'tjs@omegacc.com',
            from: 'info@omegacc.com',
            // cc: 'helenedarroze@strapi.io',
            // bcc: 'ghislainearabian@strapi.io',
            // replyTo: 'annesophiepic@strapi.io',
            subject: 'Inquiry from Omega Computers Website',
            text: response.text,
            html: ` 
            <b>From:</b> ${email.name} <br /> 
            <b>Email:</b> ${email.email} <br /> 
            <b>Number:</b> ${email.number} <br /> 
            <b>Subject:</b> ${email.subject} <br /> 
            <b>Message:</b> ${email.text}
            `,
        });

        return response;
    }
}));
