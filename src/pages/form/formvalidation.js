import React, { useState, useEffect } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [term, setTerm] = useState(false);
  const [emailClass, setEmailClass] = useState("form-control");
  const [passwordClass, setPasswordClass] = useState("form-control");
  const [termClass, setTermClass] = useState("custom-control-input");

  function onRegister(e) {
    e.preventDefault();

    if (email === "") {
      setEmailClass("form-control is-invalid");
    } else setEmailClass("form-control");

    if (password.length < 6) {
      setPasswordClass("form-control is-invalid");
    } else setPasswordClass("form-control");

    if (!term) {
      setTermClass("custom-control-input is-invalid");
    } else setTermClass("custom-control-input");
  }

  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Validation</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Validation</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              {/* left column */}
              <div className="col-md-12">
                {/* jquery validation */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">
                      Quick Example <small>React Validation</small>
                    </h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <form onSubmit={onRegister}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>

                        <input
                          type="email"
                          name="email"
                          className={emailClass}
                          value={email}
                          placeholder="Enter email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span
                          id="exampleInputEmail1-error"
                          class="error invalid-feedback"
                        >
                          Please enter a email address
                        </span>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          name="password"
                          className={passwordClass}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                          id="exampleInputPassword1-error"
                          class="error invalid-feedback"
                        >
                          Please provide a password
                        </span>
                      </div>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            name="terms"
                            className={termClass}
                            defaultChecked={term}
                            id="exampleCheck1"
                            onChange={() => setTerm(!term)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="exampleCheck1"
                          >
                            I agree to the <a href="#">terms of service</a>.
                          </label>
                          <span
                            id="exampleInputPassword1-error"
                            class="error invalid-feedback"
                          >
                            Please accept our terms
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.card */}
              </div>
              {/*/.col (left) */}
              {/* right column */}
              <div className="col-md-6"></div>
              {/*/.col (right) */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
    </div>
  );
}
