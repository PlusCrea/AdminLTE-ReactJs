import React from "react";

export default function FormGeneral() {
  return <div>{/* Content Wrapper. Contains page content */}
<div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>General Form</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">General Form</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        {/* left column */}
        <div className="col-md-6">
          {/* general form elements */}
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Quick Example</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form role="form">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">File input</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input type="file" className="custom-file-input" id="exampleInputFile" />
                      <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text" id>Upload</span>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
          {/* /.card */}
          {/* Form Element sizes */}
          <div className="card card-success">
            <div className="card-header">
              <h3 className="card-title">Different Height</h3>
            </div>
            <div className="card-body">
              <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg" />
              <br />
              <input className="form-control" type="text" placeholder="Default input" />
              <br />
              <input className="form-control form-control-sm" type="text" placeholder=".form-control-sm" />
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          <div className="card card-danger">
            <div className="card-header">
              <h3 className="card-title">Different Width</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <input type="text" className="form-control" placeholder=".col-3" />
                </div>
                <div className="col-4">
                  <input type="text" className="form-control" placeholder=".col-4" />
                </div>
                <div className="col-5">
                  <input type="text" className="form-control" placeholder=".col-5" />
                </div>
              </div>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* Input addon */}
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Input Addon</h3>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">@</span>
                </div>
                <input type="text" className="form-control" placeholder="Username" />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text">.00</span>
                </div>
              </div>
              <h4>With icons</h4>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-envelope" /></span>
                </div>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <span className="input-group-text"><i className="fas fa-check" /></span>
                </div>
              </div>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-dollar-sign" />
                  </span>
                </div>
                <input type="text" className="form-control" />
                <div className="input-group-append">
                  <div className="input-group-text"><i className="fas fa-ambulance" /></div>
                </div>
              </div>
              <h5 className="mt-4 mb-2">With checkbox and radio inputs</h5>
              <div className="row">
                <div className="col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <input type="checkbox" />
                      </span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  {/* /input-group */}
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text"><input type="radio" /></span>
                    </div>
                    <input type="text" className="form-control" />
                  </div>
                  {/* /input-group */}
                </div>
                {/* /.col-lg-6 */}
              </div>
              {/* /.row */}
              <h5 className="mt-4 mb-2">With buttons</h5>
              <p>Large: <code>.input-group.input-group-lg</code></p>
              <div className="input-group input-group-lg mb-3">
                <div className="input-group-prepend">
                  <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown">
                    Action
                  </button>
                  <ul className="dropdown-menu">
                    <li className="dropdown-item"><a href="#">Action</a></li>
                    <li className="dropdown-item"><a href="#">Another action</a></li>
                    <li className="dropdown-item"><a href="#">Something else here</a></li>
                    <li className="dropdown-divider" />
                    <li className="dropdown-item"><a href="#">Separated link</a></li>
                  </ul>
                </div>
                {/* /btn-group */}
                <input type="text" className="form-control" />
              </div>
              {/* /input-group */}
              <p>Normal</p>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className="btn btn-danger">Action</button>
                </div>
                {/* /btn-group */}
                <input type="text" className="form-control" />
              </div>
              {/* /input-group */}
              <p>Small <code>.input-group.input-group-sm</code></p>
              <div className="input-group input-group-sm">
                <input type="text" className="form-control" />
                <span className="input-group-append">
                  <button type="button" className="btn btn-info btn-flat">Go!</button>
                </span>
              </div>
              {/* /input-group */}
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* Horizontal Form */}
          <div className="card card-info">
            <div className="card-header">
              <h3 className="card-title">Horizontal Form</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form className="form-horizontal">
              <div className="card-body">
                <div className="form-group row">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="offset-sm-2 col-sm-10">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                      <label className="form-check-label" htmlFor="exampleCheck2">Remember me</label>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-info">Sign in</button>
                <button type="submit" className="btn btn-default float-right">Cancel</button>
              </div>
              {/* /.card-footer */}
            </form>
          </div>
          {/* /.card */}
        </div>
        {/*/.col (left) */}
        {/* right column */}
        <div className="col-md-6">
          {/* general form elements disabled */}
          <div className="card card-warning">
            <div className="card-header">
              <h3 className="card-title">General Elements</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <form role="form">
                <div className="row">
                  <div className="col-sm-6">
                    {/* text input */}
                    <div className="form-group">
                      <label>Text</label>
                      <input type="text" className="form-control" placeholder="Enter ..." />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Text Disabled</label>
                      <input type="text" className="form-control" placeholder="Enter ..." disabled />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* textarea */}
                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea className="form-control" rows={3} placeholder="Enter ..." defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Textarea Disabled</label>
                      <textarea className="form-control" rows={3} placeholder="Enter ..." disabled defaultValue={""} />
                    </div>
                  </div>
                </div>
                {/* input states */}
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputSuccess"><i className="fas fa-check" /> Input with
                    success</label>
                  <input type="text" className="form-control is-valid" id="inputSuccess" placeholder="Enter ..." />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputWarning"><i className="far fa-bell" /> Input with
                    warning</label>
                  <input type="text" className="form-control is-warning" id="inputWarning" placeholder="Enter ..." />
                </div>
                <div className="form-group">
                  <label className="col-form-label" htmlFor="inputError"><i className="far fa-times-circle" /> Input with
                    error</label>
                  <input type="text" className="form-control is-invalid" id="inputError" placeholder="Enter ..." />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* checkbox */}
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">Checkbox</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                        <label className="form-check-label">Checkbox checked</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" disabled />
                        <label className="form-check-label">Checkbox disabled</label>
                      </div>
                    </div>
                  </div> 
                  <div className="col-sm-6">
                    {/* radio */}
                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio1" />
                        <label className="form-check-label">Radio</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="radio1" defaultChecked />
                        <label className="form-check-label">Radio checked</label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" disabled />
                        <label className="form-check-label">Radio disabled</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* select */}
                    <div className="form-group">
                      <label>Select</label>
                      <select className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Disabled</label>
                      <select className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* Select multiple*/}
                    <div className="form-group">
                      <label>Select Multiple</label>
                      <select multiple className="form-control">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Select Multiple Disabled</label>
                      <select multiple className="form-control" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
          {/* general form elements disabled */}
          <div className="card card-secondary">
            <div className="card-header">
              <h3 className="card-title">Custom Elements</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <form role="form">
                <div className="row">
                  <div className="col-sm-6">
                    {/* checkbox */}
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="customCheckbox1" defaultValue="option1" />
                        <label htmlFor="customCheckbox1" className="custom-control-label">Custom Checkbox</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="customCheckbox2" defaultChecked />
                        <label htmlFor="customCheckbox2" className="custom-control-label">Custom Checkbox checked</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled />
                        <label htmlFor="customCheckbox3" className="custom-control-label">Custom Checkbox disabled</label>
                      </div>
                    </div>
                  </div> 
                  <div className="col-sm-6">
                    {/* radio */}
                    <div className="form-group">
                      <div className="custom-control custom-radio">
                        <input className="custom-control-input" type="radio" id="customRadio1" name="customRadio" />
                        <label htmlFor="customRadio1" className="custom-control-label">Custom Radio</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input className="custom-control-input" type="radio" id="customRadio2" name="customRadio" defaultChecked />
                        <label htmlFor="customRadio2" className="custom-control-label">Custom Radio checked</label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input className="custom-control-input" type="radio" id="customRadio3" disabled />
                        <label htmlFor="customRadio3" className="custom-control-label">Custom Radio disabled</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* select */}
                    <div className="form-group">
                      <label>Custom Select</label>
                      <select className="custom-select">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Custom Select Disabled</label>
                      <select className="custom-select" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    {/* Select multiple*/}
                    <div className="form-group">
                      <label>Custom Select Multiple</label>
                      <select multiple className="custom-select">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Custom Select Multiple Disabled</label>
                      <select multiple className="custom-select" disabled>
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                    <label className="custom-control-label" htmlFor="customSwitch1">Toggle this custom switch element</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
                    <input type="checkbox" className="custom-control-input" id="customSwitch3" />
                    <label className="custom-control-label" htmlFor="customSwitch3">Toggle this custom switch element with custom colors danger/success</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" disabled id="customSwitch2" />
                    <label className="custom-control-label" htmlFor="customSwitch2">Disabled custom switch element</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="customRange1">Custom range</label>
                  <input type="range" className="custom-range" id="customRange1" />
                </div>
                <div className="form-group">
                  <label htmlFor="customRange1">Custom range (custom-range-danger)</label>
                  <input type="range" className="custom-range custom-range-danger" id="customRange1" />
                </div>
                <div className="form-group">
                  <label htmlFor="customRange1">Custom range (custom-range-teal)</label>
                  <input type="range" className="custom-range custom-range-teal" id="customRange1" />
                </div>
                <div className="form-group">
                  {/* <label for="customFile">Custom File</label> */}
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                  </div>
                </div>
                <div className="form-group">
                </div>
              </form>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/*/.col (right) */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
{/* /.content-wrapper */}
</div>;
}
