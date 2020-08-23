var config = {
    map: {
        '*': {
            'AjaxCart': 'Xlab_AjaxCartQty/js/cartValueIncDec',
            'CartQtyUpdate': 'Xlab_AjaxCartQty/js/cartQtyUpdate',
            'Magento_Checkout/template/minicart/item/default.html': 'Xlab_AjaxCartQty/template/minicart/item/default.html'
        }
    },
    shim: {
        AjaxCart: {
            deps: ['jquery']
        },
        CartQtyUpdate: {
            deps: ['jquery']
        }
    }
};