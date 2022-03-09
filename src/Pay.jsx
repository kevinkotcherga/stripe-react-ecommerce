import StripeCheckout from 'react-stripe-checkout';

const KEY = 'pk_test_51KbMuMGV1UkxUwjy9Gr1xwExbCs97VVH0ugjzRhiF6RnfCzV3xeyNr1ITBcuDJemBeO38ZpaYVNvddHf7QAp55tu00cG8TJjMT'

const Pay = () => {

  const onToken = (token) =>{
    console.log(token)
  }
  return (
    <div
    style={{
      height: "100vh",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <StripeCheckout
        name="Shop."
        image="https://images.unsplash.com/photo-1646779182815-cfc107b1706a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        billingAddress
        shippingAddress
        description='Votre total est de 20€'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
        <button
          style={{
            border: 'none',
            width: 120,
            borderRadius: 5,
            padding: '20px',
            backgroundColor: 'black',
            color:'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >
          Payer Maintenant
        </button>
      </StripeCheckout>
    </div>
  );
}

export default Pay;
