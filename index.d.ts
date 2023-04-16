// Type definitions for QCObjects 2.4
// Project: https://qcobjects.dev
// Definitions by: Jean Machuca <https://github.com/jeanmachuca>
// Definitions: https://qcobjects.dev

/**
 */

import { View } from "qcobjects";
import { QCObjectsShadowedElement } from "qcobjects";
import { QCObjectsElement } from "qcobjects";
import { InheritClass } from "qcobjects";
import { Component, Controller, Effect, VO } from "qcobjects";

declare namespace sdk {
    class SlideListComponent extends Component { }
    class SlideItemComponent extends Component { }
    class SliderComponent extends Component { }
    class FormField extends Component { }
    class ShadowedComponent extends Component { }
    class ButtonField extends FormField { }
    class InputField extends FormField { }
    class TextField extends FormField { }
    class EmailField extends FormField { }
    class ModalEnclosureComponent extends Component { }
    class ModalComponent extends Component { }
    class SwaggerUIComponent extends Component { }
    class Contact extends VO {
        first_name:string;
        last_name:string;
        address:string;
        postalCode:string;
        city:string;
        country:string;
        email:string;
        phone:string;
    }
    class GridItemComponent extends Component { }
    class GridComponent extends Component { }
    class NotificationComponent extends Component { 
        static display(element:QCObjectsElement|QCObjectsShadowedElement|Element|ShadowRoot);
        static success(message:string);
        static danger(message:string);
        static info(message:string);
        static warning(message:string);
    }
    class GenericController extends Controller { }
    class DataGridController extends Controller { }
    class ListController extends Controller { }
    class SliderController extends Controller { }
    class SwaggerUIController extends Controller { }
    class Fade extends Effect { }
    class Move extends Effect { }
    class MoveXInFromRight extends Effect { }
    class MoveXInFromLeft extends Effect { }
    class MoveYInFromBottom extends Effect { }
    class MoveYInFromTop extends Effect { }
    class RotateX extends Effect { }
    class RotateY extends Effect { }
    class RotateZ extends Effect { }
    class Rotate extends Effect { }
    class Radius extends Effect { }
    class Resize extends Effect { }
    class WipeLeft extends Effect { }
    class WipeRight extends Effect { }
    class WipeUp extends Effect { }
    class WipeDown extends Effect { }
    class ModalFade extends Effect { }
    class ModalMoveDown extends Effect { }
    class ModalMoveUp extends Effect { }
    class i18n_messages extends InheritClass {
        messages:Array<any>;
        _load_i18n_packages_():void;
    }
    class SplashScreenComponent extends Component { }
    class VideoSplashScreenComponent extends Component { }
    class CubeSplashScreenComponent extends Component { }
    class ModalController extends Component { }
    class ListItemComponent extends Component { }
    class ListComponent extends Component { }
    class GridView extends View { }
    class BasicLayout extends InheritClass { }
    class SessionUserToken extends InheritClass { }
    class SessionData extends InheritClass { }
    class FormValidations extends Controller { }
    class FormController extends Controller { }
    class CanvasTool extends InheritClass { }
}

export = sdk;