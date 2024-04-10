define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Learningmagento_CustomPayment/payment/in_store_payment'
            }
        });
    }
);
