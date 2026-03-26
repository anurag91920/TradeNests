import React from "react";

function Contact() {
  return (
<div className="text-center container p-5 mb-5">
      <h1 className='mt-5'>Contact Us</h1>
        <p>Have a query? We are here to help you.</p>
        <hr />
    <div className="container my-5">
      <div className="row">
        {/* Left Side Support Portal Box */}
        <div className="col-md-3 mb-4">
          <div className="p-4 bg-light rounded shadow-sm">
            <h5>Support portal</h5>
            <p>Have a query?</p>
            <a class="button" className='p-2 btn btn-primary fs-5 mb-5' href="/Support">Create a ticket</a>
          </div>
        </div>

        {/* New Account Opening */}
        <div className="col-md-3 mb-4">
          <h5>New account opening</h5>
          <p><strong>Monday – Friday</strong><br/>8:30 AM - 5:00 PM</p>
          <p><strong>Saturday</strong><br/>9:00 AM - 2:00 PM</p>
          <p>📞 080 4719 2020</p>
          <p>📞 080 7117 5337</p>
        </div>

        {/* Support */}
        <div className="col-md-3 mb-4">
          <h5>Support</h5>
          <p><strong>Monday – Friday</strong><br/>8:30 AM - 5:00 PM</p>
          <p>📞 080 4718 1888</p>
          <p>📞 080 4718 1999</p>
          <p>📞 080 4588 8887</p>
        </div>

        {/* Call & Trade */}
        <div className="col-md-3 mb-4">
          <h5>Call & trade</h5>
          <p><strong>Monday – Friday</strong><br/>9:00 AM - 11:55 PM</p>
          <p>📞 080 4718 1888</p>
        </div>

      </div>

      {/* Bottom Notes */}
      <div className="mt-4 small text-muted">
        <p>
          * Existing clients calling from an unregistered number need a support code to reach our support desk.
        </p>
        <p>
          * Calls to customers will only be made from our official numbers.
        </p>
        <p>
          * For emergency account block, please call 080 4680 1166.
        </p>
      </div>
    </div>
</div>
  );
}

export default Contact;