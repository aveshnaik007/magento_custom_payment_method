<?php

/**
 *
 * @category  Custom Development
 * @email     contactus@learningmagento.com
 * @author    Avesh Naik
 * @website   learningmagento.com
 * @Date      24-02-2024
 */

namespace Learningmagento\CustomPayment\Model;

class PaymentMethod extends \Magento\Payment\Model\Method\AbstractMethod
{
    const CODE = 'in_store_payment';

    protected $_canAuthorize = 'true';

    protected $_code = self::CODE;
}
