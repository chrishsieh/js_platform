import moment from 'moment';
import * as React from 'react';
import { WithTranslation } from 'react-i18next';
import { i18n } from '../../src/i18n';
import { SmallBoxItem } from '../../src/shared/interface/dashboardlist';

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

interface SelectDetailProps {
  width: string;
  name: string;
  showlabel: string;
  defaultSelect: string;
  splitLine?: boolean;
  listArray: string[];
}

interface NameDetailProps {
  width: string;
  name: string;
  showlabel: string;
  placeholder: string;
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

interface ListDetailProps {
  index: number;
  value: string;
}

const SplitPattern: React.FunctionComponent = () => (
  <option value="0-" disabled={true}>-----------------------</option>
);

const ListPattern: React.FunctionComponent<ListDetailProps> = ({
  index, value,
}) => (
    <option value={index.toString()}>{value}</option>
  );

const SelectPattern: React.FunctionComponent<SelectDetailProps> = ({
  width, name, showlabel, defaultSelect, splitLine, listArray,
}) => (
    <div className={width}>
      <label>{showlabel}</label>
      <select name={name} className="form-control" defaultValue={'0'}>
        <option value="0" selected={false}>{defaultSelect}</option>
        {splitLine ? (<SplitPattern />) : ''}
        {listArray.map((value, index) => (<ListPattern key={index} index={index + 1} value={value} />))}
      </select>
    </div>
  );

const NamePattern: React.FunctionComponent<NameDetailProps> = ({
  width, name, showlabel, placeholder,
}) => (
    <div className={'col-md-' + width}>
      <label htmlFor={name}>{showlabel}</label>
      <input type="text" name={name} id={name} defaultValue="" placeholder={placeholder} className="form-control" />
    </div>
  );

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
  name, showlabel, defaultValue, id, size,
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
          <h1>{i18n.t('person_editor.person_editor', 'Person Editor')}</h1>
        </section>
        {/* <!-- Main content --> */}
        <section className="content">
          <form method="post" action="PersonEditor?PersonID=0" name="PersonEditor">
            <div className="alert alert-info alert-dismissable">
              <i className="fa fa-info" />
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
              <strong>
                <span style={{ color: 'red' }}>
                  {i18n.t('person_editor.red_text', 'Red text')}
                </span>
              </strong>
              {i18n.t('person_editor.highlight_string', 'indicates items inherited from the associated family record.')}
            </div>
            <div className="box box-info clearfix">
              <div className="box-header">
                <h3 className="box-title">{i18n.t('person_editor.personal_info', 'Personal Info')}</h3>
                <div className="pull-right">
                  <br />
                  <input type="submit" className="btn btn-primary" value="保存" name="PersonSubmit" />
                </div>
              </div>
              {/* <!-- /.box-header --> */}
              <div className="box-body">
                <div className="form-group">
                  <div className="row">
                    <SelectPattern width="col-md-2" name="Gender" showlabel="性別:" defaultSelect="選擇性別" splitLine={true} listArray={['男', '女']} />
                    <NamePattern width="3" name="Title" showlabel="標題:" placeholder={i18n.t('person_editor.person_title', 'Mr., Mrs., Dr., Rev.')} />
                  </div>
                  <p />
                  <div className="row">
                    <NamePattern width="4" name="FirstName" showlabel="名字:" placeholder="" />
                    <NamePattern width="2" name="MiddleName" showlabel="中間名:" placeholder="" />
                    <NamePattern width="4" name="LastName" showlabel="姓氏:" placeholder="" />
                    <NamePattern width="1" name="Suffix" showlabel="後綴:" placeholder={i18n.t('person_editor.person_suffix', 'Jr.，Sr.，III')} />
                  </div>
                  <p />
                  <div className="row">
                    <SelectPattern
                      width="col-md-2"
                      name="BirthMonth"
                      showlabel="出生月:"
                      defaultSelect="選擇月份"
                      splitLine={false}
                      listArray={['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']}
                    />
                    <SelectPattern
                      width="col-md-2"
                      name="BirthDay"
                      showlabel="出生日:"
                      defaultSelect="選擇日期"
                      splitLine={false}
                      listArray={Array.from(Array(31), (e, i) => (i + 1).toString())}
                    />
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
                <SelectPattern
                  width="form-group col-md-3"
                  name="FamilyRole"
                  showlabel="家庭角色:"
                  defaultSelect="未分配"
                  splitLine={true}
                  listArray={['Head of Household', 'Spouse', 'Child', 'Other Relative', 'Non Relative']}
                />
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
                  <SelectPattern
                    width="form-group col-md-3 col-lg-3"
                    name="Classification"
                    showlabel="分類:"
                    defaultSelect="未分配"
                    splitLine={true}
                    listArray={['Member', 'Regular Attender', 'Guest', 'Non-Attender (staff)', 'Non-Attender']}
                  />
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
