var config = {
    map: {
        '*': {
            'AjaxCart': 'Xlab_AjaxCartQty/js/cartValueIncDec',
            'CartQtyUpdate': 'Xlab_AjaxCartQty/js/cartQtyUpdate',
            'sidebar': 'Xlab_AjaxCartQty/js/sidebar',
            'Magento_Checkout/js/view/minicart': 'Xlab_AjaxCartQty/js/view/minicart',
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