import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages/mainpage";
import MainPage2 from "./pages/mainpage2";
import MainPage3 from "./pages/mainpage3";
import TopNavBar from "./pages/topnavbar";
import LeftSideBar from "./pages/leftsidebar";
import Footer from "./pages/footer";
import Widgets from "./pages/widgets";
import Calendar from "./pages/calendar";
import Invoice from "./pages/subpages/invoice";
import InvoicePrint from "./pages/subpages/invoiceprint";
import Profile from "./pages/subpages/profile";
import Ecommerce from "./pages/subpages/ecommerce";
import Projects from "./pages/subpages/projects";
import ProjectAdd from "./pages/subpages/projectadd";
import ProjectEdit from "./pages/subpages/projectedit";
import ProjectDetail from "./pages/subpages/projectdetail";
import Contacts from "./pages/subpages/contacts";
import SimpleTables from "./pages/tables/simpletables";
import DataTables from "./pages/tables/datatables";
import JsGrid from "./pages/tables/jsgrid";
import Gallery from "./pages/gallery";
import ChartJs from "./pages/charts/chartjs";
import Flot from "./pages/charts/flot";
import Inline from "./pages/charts/inline";
import UiGeneral from "./pages/uielements/uigeneral";
import UiIcons from "./pages/uielements/uiicons";
import UiButton from "./pages/uielements/uibutton";
import UiSlider from "./pages/uielements/uislider";
import UiModals from "./pages/uielements/uimodals";
import UiNavbar from "./pages/uielements/uinavbar";
import UiTimeline from "./pages/uielements/uitimeline";
import UiRibbons from "./pages/uielements/uiribbons";
import Inbox from "./pages/mailbox/inbox";
import Compose from "./pages/mailbox/compose";
import ReadMail from "./pages/mailbox/readmail";
import BlankPage from "./pages/examples/blankpage";
import Pace from "./pages/examples/pace";
import Page500 from "./pages/examples/page500";
import Page404 from "./pages/examples/page404";
import LanguageMenu from "./pages/examples/languagemenu";
import LegacyUserMenu from "./pages/examples/legacyusermenu";
import Login from "./pages/examples/login";
import Register from "./pages/examples/register";
import ForgotPassword from "./pages/examples/forgotpassword";
import RecoverPassword from "./pages/examples/recoverpassword";
import LockScreen from "./pages/examples/lockscreen";
import Starter from "./pages/examples/starter";
import FormGeneral from "./pages/form/formgeneral";
import FormAdvanced from "./pages/form/formadvanced";
import FormEditor from "./pages/form/formeditor";
import FormValidation from "./pages/form/formvalidation";

function App() {
  let pathName = window.location.pathname;
  let printhideheaderpath = pathName.includes("extra");
  //console.log("pathName==>", printhideheaderpath);
  return (
    <Router>
      <div className="wrapper">
        {printhideheaderpath ? "" : <LeftSideBar />}
        {printhideheaderpath ? "" : <TopNavBar />}
        <Switch>
          <Route path="/index2" component={MainPage2} />
          <Route path="/index3" component={MainPage3} />
          <Route path="/widgets" component={Widgets} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/pages/invoice" component={Invoice} />
          <Route path="/extra/invoiceprint" component={InvoicePrint} />
          <Route path="/pages/profile" component={Profile} />
          <Route path="/pages/ecommerce" component={Ecommerce} />
          <Route path="/pages/projects" component={Projects} />
          <Route path="/pages/projectadd" component={ProjectAdd} />
          <Route path="/pages/projectedit" component={ProjectEdit} />
          <Route path="/pages/projectdetail" component={ProjectDetail} />
          <Route path="/pages/contacts" component={Contacts} />
          <Route path="/table/simpletables" component={SimpleTables} />
          <Route path="/table/datatables" component={DataTables} />
          <Route path="/table/jsgrid" component={JsGrid} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/chart/chartjs" component={ChartJs} />
          <Route path="/chart/flot" component={Flot} />
          <Route path="/chart/inline" component={Inline} />
          <Route path="/ui/uigeneral" component={UiGeneral} />
          <Route path="/ui/uiicons" component={UiIcons} />
          <Route path="/ui/uibuttons" component={UiButton} />
          <Route path="/ui/uisliders" component={UiSlider} />
          <Route path="/ui/uimodals" component={UiModals} />
          <Route path="/ui/uinavbar" component={UiNavbar} />
          <Route path="/ui/uitimeline" component={UiTimeline} />
          <Route path="/ui/uiribbons" component={UiRibbons} />
          <Route path="/mail/inbox" component={Inbox} />
          <Route path="/mail/compose" component={Compose} />
          <Route path="/mail/readmail" component={ReadMail} />
          <Route path="/menu/blankpage" component={BlankPage} />
          <Route path="/menu/pace" component={Pace} />
          <Route path="/menu/page500" component={Page500} />
          <Route path="/menu/page404" component={Page404} />
          <Route path="/menu/languagemenu" component={LanguageMenu} />
          <Route path="/menu/legacyusermenu" component={LegacyUserMenu} />
          <Route path="/extra/login" component={Login} />
          <Route path="/extra/register" component={Register} />
          <Route path="/extra/forgotpassword" component={ForgotPassword} />
          <Route path="/extra/recoverpassword" component={RecoverPassword} />
          <Route path="/extra/lockscreen" component={LockScreen} />
          <Route path="/extra/starter" component={Starter} />
          <Route path="/form/formgeneral" component={FormGeneral} />
          <Route path="/form/formadvanced" component={FormAdvanced} />
          <Route path="/form/formeditor" component={FormEditor} />
          <Route path="/form/formvalidation" component={FormValidation} />

          <Route path="/index1" component={MainPage} />
          <Route path="/" component={MainPage} />
        </Switch>
        {printhideheaderpath ? "" : <Footer />}
      </div>
    </Router>
  );
}

export default App;
