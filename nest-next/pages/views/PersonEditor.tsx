import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';
import moment from 'moment';

interface InitialProps {
  query: {

  };
}

interface Props {
  query: {
    smallBoxs: SmallBoxItem[];
    listGender: any;
    AdultsGenderCount: number;
    KidsGenderCount: number;
    AgeCountGroup: number;
  };
  namespacesRequired: string[];
}

interface PhoneDetailProps {
  name: string;
  showlabel: string;
  inputMask: string;
}

interface EmailDetailProps {
  name: string;
  showlabel: string;
}

interface SocialDetailProps {
  name: string;
  showlabel: string;
  icon: string;
}

interface DateDetailProps {
  name: string;
  showlabel: string;
  defaultValue: string;
  id: string;
  size: number;
}

const PhonePattern: React.FunctionComponent<PhoneDetailProps> = ({
  name, showlabel, inputMask,
}) => (
    <div className="form-group col-md-3">
      <label htmlFor={name}>{showlabel}</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-phone" />
        </div>
        <input
          type="text"
          name={name}
          defaultValue=""
          size={30}
          maxLength={30}
          className="form-control"
          data-inputmask={'mask: ' + inputMask}
          data-mask=""
          im-insert="true"
        />
        <br />
        <input type="checkbox" name={'NoFormat_' + name} defaultValue="1" />不要自動格式
      </div>
    </div>
  );

const EmailPattern: React.FunctionComponent<EmailDetailProps> = ({
  name, showlabel,
}) => (
    <div className="form-group col-md-4">
      <label htmlFor={name}>{showlabel}</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-envelope" />
        </div>
        <input type="text" name={name} defaultValue="" size={30} maxLength={100} className="form-control" />
      </div>
    </div>
  );

const SocialPattern: React.FunctionComponent<SocialDetailProps> = ({
  name, showlabel, icon,
}) => (
    <div className="form-group col-md-4">
      <label htmlFor={name}>{showlabel}</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className={'fa ' + icon} />
        </div>
        <input type="text" name={name} defaultValue="" size={30} maxLength={100} className="form-control" />
      </div>
    </div>
  );

const DatePattern: React.FunctionComponent<DateDetailProps> = ({
  name, showlabel, defaultValue, id, size
}) => (
    <div className="form-group col-md-3 col-lg-3">
      <label>{showlabel}</label>
      <div className="input-group">
        <div className="input-group-addon">
          <i className="fa fa-calendar" />
        </div>
        {/* <!-- Philippe Logel --> */}
        <input type="text" name={name} className="form-control date-picker" defaultValue={defaultValue} maxLength={10} id={id} size={size} placeholder="yyyy-mm-dd" />
      </div>
    </div>
  );

class PersonEditor extends React.Component<Props & WithTranslation> {
  public static getInitialProps({ query }: InitialProps) {
    return { query, namespacesRequired: ['common'] };
  }

  private handleClick: () => {

  };

  public render() {
    return (
      < div >
        <section className="content-header">
          <h1>人編輯器</h1>
        </section>
        {/* <!-- Main content --> */}
        <section className="content">
          <form method="post" action="PersonEditor.php?PersonID=0" name="PersonEditor">
            <div className="alert alert-info alert-dismissable">
              <i className="fa fa-info" />
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <strong><span style={{ color: 'red' }}>紅色文字</span></strong> 表示繼承自相關的家庭記錄的項目。
            </div>
            <div className="box box-info clearfix">
              <div className="box-header">
                <h3 className="box-title">個人信息</h3>
                <div className="pull-right">
                  <br />
                  <input type="submit" className="btn btn-primary" value="保存" name="PersonSubmit" />
                </div>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-2">
                      <label>性別:</label>
                      <select name="Gender" className="form-control" defaultValue={'0'}>
                        <option value="0" selected={false}>選擇性別</option>
                        <option value="0-" disabled={true}>-----------------------</option>
                        <option value="1">男</option>
                        <option value="2">女</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="Title">標題:</label>
                      <input type="text" name="Title" id="Title" defaultValue="" className="form-control" placeholder="先生，夫人，博士，牧師" />
                    </div>
                  </div>
                  <p />
                  <div className="row">
                    <div className="col-md-4">
                      <label htmlFor="FirstName">名字:</label>
                      <input type="text" name="FirstName" id="FirstName" defaultValue="" className="form-control" />
                    </div>
                    <div className="col-md-2">
                      <label htmlFor="MiddleName">中間名:</label>
                      <input type="text" name="MiddleName" id="MiddleName" defaultValue="" className="form-control" />
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="LastName">姓氐:</label>
                      <input type="text" name="LastName" id="LastName" defaultValue="" className="form-control" />
                    </div>
                    <div className="col-md-1">
                      <label htmlFor="Suffix">後綴:</label>
                      <input type="text" name="Suffix" id="Suffix" defaultValue="" placeholder="Jr.，Sr.，III" className="form-control" />
                    </div>
                  </div>
                  <p />
                  <div className="row">
                    <div className="col-md-2">
                      <label>出生月:</label>
                      <select name="BirthMonth" className="form-control" defaultValue={'0'}>
                        <option value="0" selected={false}>選擇月份</option>
                        <option value="01">一月</option>
                        <option value="02">二月</option>
                        <option value="03">三月</option>
                        <option value="04">四月</option>
                        <option value="05">五月</option>
                        <option value="06">六月</option>
                        <option value="07">七月</option>
                        <option value="08">八月</option>
                        <option value="09">九月</option>
                        <option value="10">十月</option>
                        <option value="11">十一月</option>
                        <option value="12">十二月</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label>出生日:</label>
                      <select name="BirthDay" className="form-control" defaultValue={'0'}>
                        <option value="0" selected={false}>選擇日期</option>
                        <option value="01">1</option>
                        <option value="02">2</option>
                        <option value="03">3</option>
                        <option value="04">4</option>
                        <option value="05">5</option>
                        <option value="06">6</option>
                        <option value="07">7</option>
                        <option value="08">8</option>
                        <option value="09">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <label>出生年份:</label>
                      <input type="text" name="BirthYear" defaultValue="0" maxLength={4} size={5} placeholder="yyyy" className="form-control" />
                    </div>
                    <div className="col-md-2">
                      <label>隱藏年齡</label>
                      <br />
                      <input type="checkbox" name="HideAge" defaultValue="1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box box-info clearfix">
              <div className="box-header">
                <h3 className="box-title">家庭資料</h3>
                <div className="pull-right"><br />
                  <input type="submit" className="btn btn-primary" defaultValue="保存" name="PersonSubmit" />
                </div>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <div className="form-group col-md-3">
                  <label>家庭角色:</label>
                  <select name="FamilyRole" className="form-control" defaultValue={'0'}>
                    <option value="0" selected={false}>未分配</option>
                    <option value="0-" disabled={true}>-----------------------</option>
                    <option value="1">Head of Household&nbsp;</option><option value="2">Spouse&nbsp;</option><option value="3">Child&nbsp;</option><option value="4">Other Relative&nbsp;</option><option value="5">Non Relative&nbsp;                </option></select>
                </div>
                <div className="form-group col-md-6">
                  <label>家庭:</label>
                  <select name="Family" id="famailyId" className="form-control select2-hidden-accessible" data-select2-id="famailyId" tabIndex={-1} aria-hidden="true">
                    <option value="0" selected={false} data-select2-id="2">未分配</option>
                    <option value="-1">創建一個新的家庭（使用姓氏）</option>
                    <option value="0-" disabled={true}>-----------------------</option>
                    <option value="13">Beck&nbsp; - 6381 Valwood Pkwy / Buffalo, ME</option><option value="14">Berry&nbsp; - 1931 Edwards Rd / Riverside, PA</option><option value="20">Black&nbsp; - 4307 Avondale Ave / Shiloh, CT</option><option value="1">Campbell&nbsp; - 3259 Daisy Dr / Denton, AR</option><option value="17">Cooper&nbsp; - 1782 Daisy Dr / Oxnard, GA</option><option value="9">Diaz&nbsp; - 1158 Harrison Ct / Hialeah, IA</option><option value="6">Dixon&nbsp; - 6730 Mockingbird Hill / Roanoke, IL</option><option value="10">Gordon&nbsp; - 1255 Brown Terrace / Louisville, MI</option><option value="2">Hart&nbsp; - 4878 Valley View Ln / Grand Rapids, ND</option><option value="19">Kennedy&nbsp; - 9481 Wycliff Ave / Long Beach, KY</option><option value="16">Larson&nbsp; - 3866 Edwards Rd / Inglewood, CO</option><option value="3">Lewis&nbsp; - 2379 Northaven Rd / Detroit, WV</option><option value="11">Newman&nbsp; - 5427 Stevens Creek Blvd / Orlando, MN</option><option value="12">Olson&nbsp; - 1272 Shady Ln Dr / Toledo, NE</option><option value="4">Ray&nbsp; - 4212 Parker Rd / Chesapeake, WI</option><option value="18">Riley&nbsp; - 1403 Avondale Ave / Scottsdale, ID</option><option value="5">Smith&nbsp; - 5572 Robinson Rd / Santa Clarita, KY</option><option value="21">Smith&nbsp; - 123 Main St. / Seattle, WA</option><option value="7">Stewart&nbsp; - 7045 Wycliff Ave / Gainesville, SD                </option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: '781.5px' }}>
                    <span className="selection">
                      <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-famailyId-container">
                        <span className="select2-selection__rendered" id="select2-famailyId-container" role="textbox" aria-readonly="true" title="未分配">未分配</span><span className="select2-selection__arrow" role="presentation">
                          <b role="presentation" />
                        </span>
                      </span>
                    </span>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </div>
            <div className="box box-info clearfix">
              <div className="box-header">
                <h3 className="box-title">聯絡人資料</h3>
                <div className="pull-right"><br />
                  <input type="submit" className="btn btn-primary" defaultValue="保存" name="PersonSubmit" />
                </div>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <input type="hidden" name="Address1" defaultValue="" />
                <input type="hidden" name="Address2" defaultValue="" />
                <input type="hidden" name="City" defaultValue="Kansas City" />
                <input type="hidden" name="State" defaultValue="MO" />
                <input type="hidden" name="StateTextbox" defaultValue="MO" />
                <input type="hidden" name="Zip" defaultValue="" />
                <input type="hidden" name="Country" defaultValue="United States" />
                <div className="row">
                  <PhonePattern name="HomePhone" showlabel="家庭電話:" inputMask="(999) 999-9999" />
                  <PhonePattern name="WorkPhone" showlabel="工作電話:" inputMask="(999) 999-9999 x99999" />
                  <PhonePattern name="CellPhone" showlabel="手機:" inputMask="(999) 999-9999" />
                </div>
                <p />
                <div className="row">
                  <EmailPattern name="Email" showlabel="電子郵件:" />
                  <EmailPattern name="WorkEmail" showlabel="工作/其他電子郵件:" />
                </div>
                <div className="row">
                  <SocialPattern name="Facebook" showlabel="Facebook:" icon="fa-facebook" />
                  <SocialPattern name="Twitter" showlabel="Twitter:" icon="fa-twitter" />
                  <SocialPattern name="LinkedIn" showlabel="LinkedIn:" icon="fa-linkedin" />
                </div>
              </div>
            </div>
            <div className="box box-info clearfix">
              <div className="box-header">
                <h3 className="box-title">成員信息</h3>
                <div className="pull-right"><br />
                  <input type="submit" className="btn btn-primary" defaultValue="保存" name="PersonSubmit" />
                </div>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <div className="row">
                  <div className="form-group col-md-3 col-lg-3">
                    <label>分類:</label>
                    <select name="Classification" className="form-control" defaultValue={'0'}>
                      <option value="0" selected={false}>未分配</option>
                      <option value="0-" disabled={true}>-----------------------</option>
                      <option value="1">Member&nbsp;</option>
                      <option value="2">Regular Attender&nbsp;</option>
                      <option value="3">Guest&nbsp;</option>
                      <option value="5">Non-Attender&nbsp;</option>
                      <option value="4">Non-Attender (staff)&nbsp;                </option>
                    </select>
                  </div>
                  <DatePattern name="MembershipDate" showlabel="會員日期:" defaultValue="" id="sel1" size={12} />
                  <DatePattern name="FriendDate" showlabel="友情日期:" defaultValue={moment().format('YYYY-MM-DD')} id="sel2" size={12} />
                </div>
              </div>
            </div>
            <input type="submit" className="btn btn-primary" id="PersonSaveButton" defaultValue="保存" name="PersonSubmit" />
            <input type="submit" className="btn btn-primary" defaultValue="保存並添加" name="PersonSubmitAndAdd" />
            <input type="button" className="btn btn-primary" defaultValue="取消" name="PersonCancel" onClick={this.handleClick} />
          </form>
        </section>
        {/* <!-- /.content --> */}
      </div >
    );
  }
}

export default PersonEditor;
