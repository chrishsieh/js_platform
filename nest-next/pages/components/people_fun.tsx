import * as React from 'react';
import { i18n } from '../../src/i18n';

class PeopleFun extends React.Component<any> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }
  public render() {
    return (
      <div className="box">
        <div className="box-header with-border">
          <h3 className="box-title">{i18n.t('People Functions')}</h3>
        </div>
        <div className="box-body">
          <a href="/master/v2/people" className="btn btn-app"><i className="fa fa-user" />{i18n.t('All People')}</a>
          <a href="/master/v2/people/verify" className="btn btn-app">
            <i className="fa fa-check-square-o" />{i18n.t('Verify People')}</a>
          <div className="btn-group">
            <a className="btn btn-app" href="mailto:mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com%2Ctony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com%2Cnatalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com%2Cdarren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">
              <i className="fa fa-send-o" />{i18n.t('Email All')}</a>
            <button type="button" className="btn btn-app dropdown-toggle" data-toggle="dropdown">
              <span className="caret" />
              <span className="sr-only">{i18n.t('Toggle Dropdown')}</span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li> <a href="mailto:mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com">{i18n.t('Member')}</a></li>
              <li> <a href="mailto:tony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com">{i18n.t('Regular Attender')}</a></li>
              <li> <a href="mailto:natalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com">{i18n.t('Guest')}</a></li>
              <li> <a href="mailto:darren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">{i18n.t('Non-Attender')}</a></li>
            </ul>
          </div>
          <div className="btn-group">
            <a className="btn btn-app" href="mailto:?bcc=mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com%2Ctony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com%2Cnatalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com%2Cdarren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">
              <i className="fa fa-send" />{i18n.t('Email All (BCC)')}</a>
            <button type="button" className="btn btn-app dropdown-toggle" data-toggle="dropdown">
              <span className="caret" />
              <span className="sr-only">{i18n.t('Toggle Dropdown')}</span>
            </button>
            <ul className="dropdown-menu" role="menu">
              <li> <a href="mailto:?bcc=mathew.campbell%40example.com%2Calbert.garcia%40example.com%2Cconstance.hart%40example.com%2Cmarion.sutton%40example.com%2Cherminia.bennett%40example.com%2Cjean.williams%40example.com%2Ctom.gardner%40example.com%2Cisabella.murphy%40example.com%2Channah.dean%40example.com%2Civan.hayes%40example.com%2Cnathan.lewis%40example.com%2Cpaul.robertson%40example.com%2Calvin.stewart%40example.com%2Cjon.olson%40example.com%2Csandra.vasquez%40example.com%2Cbrianna.berry%40example.com%2Csalvador.robertson%40example.com%2Csalvador.steward%40example.com%2Cnorman.cooper%40example.com%2Cjudy.douglas%40example.com%2Cisobel.jimenez%40example.com%2Cjesse.morales%40example.com%2Crandall.riley%40example.com%2Cbernard.shaw%40example.com%2Cbruce.kennedy%40example.com%2Ckatie.hoffman%40example.com">{i18n.t('Member')}</a></li>
              <li> <a href="mailto:?bcc=tony.wade%40example.com%2Cvivan.stone%40example.com%2Calicia.wood%40example.com%2Crafael.dixon%40example.com%2Ckenzi.fields%40example.com%2Csherri.gordon%40example.com%2Cleroy.larson%40example.com%2Cnatalie.lynch%40example.com%2Ccharlene.holmes%40example.com%2Cscott.curtis%40example.com%2Ccecil.brooks%40example.com%2Ccharlie.steward%40example.com%2Ctomothy.morris%40example.com%2Clydia.beck%40example.com%2Camanda.black%40example.com%2Clena.walker%40example.com%2Csamantha.duncan%40example.com%2Cserenity.banks%40example.com">{i18n.t('Regular Attender')}</a></li>
              <li> <a href="mailto:?bcc=natalie.diaz%40example.com%2Crhonda.mcdonalid%40example.com%2Ckurt.hernandez%40example.com%2Clorraine.craig%40example.com">{i18n.t('Guest')}</a></li>
              <li> <a href="mailto:?bcc=darren.freeman%40example.com%2Cedwin.adams%40example.com%2Cbradley.spencer%40example.com%2Ccarrie.knight%40example.com">{i18n.t('Non-Attender')}</a></li>
            </ul>
          </div>
          <br />
          <a href="/master/v2/family" className="btn btn-app"><i className="fa fa-users" />{i18n.t('All Families')}</a>
          <a href="GeoPage.php" className="btn btn-app"><i className="fa fa-globe" />{i18n.t('Family Geographic')}</a>
          < a href="MapUsingGoogle.php?GroupID=-1" className="btn btn-app" >
            <i className="fa fa-map" />{i18n.t('Family Map')}</a>
          < a href="UpdateAllLatLon.php" className="btn btn-app" >
            <i className="fa fa-map-pin" />{i18n.t('Update All Family Coordinates')}</a>
        </div>
      </div>
    );
  }
}

export default PeopleFun;
