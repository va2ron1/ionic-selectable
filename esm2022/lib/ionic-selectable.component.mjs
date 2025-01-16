/* eslint-disable max-len */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @angular-eslint/no-output-on-prefix */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-underscore-dangle */
// tslint:disable-next-line:max-line-length
import { Component, ContentChild, EventEmitter, forwardRef, HostBinding, Input, Optional, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicSelectableAddItemTemplateDirective } from './ionic-selectable-add-item-template.directive';
import { IonicSelectableCloseButtonTemplateDirective } from './ionic-selectable-close-button-template.directive';
import { IonicSelectableFooterTemplateDirective } from './ionic-selectable-footer-template.directive';
import { IonicSelectableGroupEndTemplateDirective } from './ionic-selectable-group-end-template.directive';
import { IonicSelectableGroupTemplateDirective } from './ionic-selectable-group-template.directive';
import { IonicSelectableHeaderTemplateDirective } from './ionic-selectable-header-template.directive';
import { IonicSelectableItemEndTemplateDirective } from './ionic-selectable-item-end-template.directive';
import { IonicSelectableItemIconTemplateDirective } from './ionic-selectable-item-icon-template.directive';
import { IonicSelectableItemTemplateDirective } from './ionic-selectable-item-template.directive';
import { IonicSelectableMessageTemplateDirective } from './ionic-selectable-message-template.directive';
import { IonicSelectableModalComponent } from './ionic-selectable-modal.component';
import { IonicSelectablePlaceholderTemplateDirective } from './ionic-selectable-placeholder-template.directive';
import { IonicSelectableSearchFailTemplateDirective } from './ionic-selectable-search-fail-template.directive';
import { IonicSelectableTitleTemplateDirective } from './ionic-selectable-title-template.directive';
import { IonicSelectableValueTemplateDirective } from './ionic-selectable-value-template.directive';
import { IonicSelectableIconTemplateDirective } from './ionic-selectable-icon-template.directive';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
import * as i2 from "@angular/common";
export class IonicSelectableComponent {
    get _isMultipleCssClass() {
        return this.isMultiple;
    }
    get _hasValueCssClass() {
        return this.hasValue();
    }
    get _hasPlaceholderCssClass() {
        return this._hasPlaceholder;
    }
    get _hasIonLabelCssClass() {
        return this._hasIonLabel;
    }
    get _hasDefaultIonLabelCssClass() {
        return this._ionLabelPosition === 'default';
    }
    get _hasFixedIonLabelCssClass() {
        return this._ionLabelPosition === 'fixed';
    }
    get _hasStackedIonLabelCssClass() {
        return this._ionLabelPosition === 'stacked';
    }
    get _hasFloatingIonLabelCssClass() {
        return this._ionLabelPosition === 'floating';
    }
    get _hasInfiniteScroll() {
        return this.isEnabled && this._modalComponent &&
            this._modalComponent._infiniteScroll ? true : false;
    }
    get _shouldStoreItemValue() {
        return this.shouldStoreItemValue && this._hasObjects;
    }
    /**
     * Text of [Ionic Label](https://ionicframework.com/docs/api/label).
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#label).
     *
     * @readonly
     * @default null
     * @memberof IonicSelectableComponent
     */
    get label() {
        return this._label;
    }
    /**
     * Text that the user has typed in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchtext).
     *
     * @readonly
     * @default ''
     * @memberof IonicSelectableComponent
     */
    get searchText() {
        return this._searchText;
    }
    set searchText(searchText) {
        this._searchText = searchText;
        this._setHasSearchText();
    }
    /**
     * Determines whether search is running.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#issearching).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isSearching() {
        return this._isSearching;
    }
    /**
     * Determines whether user has typed anything in Searchbar.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hassearchtext).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get hasSearchText() {
        return this._hasSearchText;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        // Set value items.
        this._valueItems.splice(0, this._valueItems.length);
        if (this.isMultiple) {
            if (value && value.length) {
                Array.prototype.push.apply(this._valueItems, value);
            }
        }
        else {
            if (!this._isNullOrWhiteSpace(value)) {
                this._valueItems.push(value);
            }
        }
        this._setIonItemHasValue();
        this._setHasPlaceholder();
        this.setIonicClasses(this._element);
    }
    /**
     * Determines whether the component is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isEnabled() {
        return this._isEnabled;
    }
    set isEnabled(isEnabled) {
        this._isEnabled = !!isEnabled;
        this.enableIonItem(this._isEnabled);
    }
    /**
     * Determines whether Modal should be closed when backdrop is clicked.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldbackdropclose).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get shouldBackdropClose() {
        return this._shouldBackdropClose;
    }
    set shouldBackdropClose(shouldBackdropClose) {
        this._shouldBackdropClose = !!shouldBackdropClose;
    }
    /**
     * Determines whether Modal is opened.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isopened).
     *
     * @default false
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get isOpened() {
        return this._isOpened;
    }
    /**
     * Determines whether Confirm button is visible for single selection.
     * By default Confirm button is visible only for multiple selection.
     * **Note**: It is always true for multiple selection and cannot be changed.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasconfirmbutton).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get hasConfirmButton() {
        return this._hasConfirmButton;
    }
    set hasConfirmButton(hasConfirmButton) {
        this._hasConfirmButton = !!hasConfirmButton;
        this._countFooterButtons();
    }
    /**
     * Determines whether `onSearch` event is enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isonsearchenabled).
     *
     * @default true
     * @memberof IonicSelectableComponent
     */
    get isOnSearchEnabled() {
        return this._isOnSearchEnabled;
    }
    set isOnSearchEnabled(isOnSearchEnabled) {
        this._isOnSearchEnabled = !!isOnSearchEnabled;
    }
    /**
     * Determines whether to show Clear button.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canclear).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canClear() {
        return this._canClear;
    }
    set canClear(canClear) {
        this._canClear = !!canClear;
        this._countFooterButtons();
    }
    /**
      * Determines whether to show select all button.
      *
      * @default false
      * @memberof IonicSelectableComponent
      */
    get canSelectAll() {
        return this._canSelectAll;
    }
    set canSelectAll(canSelectAll) {
        this._canSelectAll = !!canSelectAll;
        this._countFooterButtons();
    }
    /**
     * Determines whether multiple items can be selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ismultiple).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get isMultiple() {
        return this._isMultiple;
    }
    set isMultiple(isMultiple) {
        this._isMultiple = !!isMultiple;
        this._countFooterButtons();
    }
    /**
     * A list of items that are selected and awaiting confirmation by user, when he has clicked Confirm button.
     * After the user has clicked Confirm button items to confirm are cleared.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemstoconfirm).
     *
     * @default []
     * @readonly
     * @memberof IonicSelectableComponent
     */
    get itemsToConfirm() {
        return this._itemsToConfirm;
    }
    /**
     * Determines whether to allow adding items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#canadditem).
     *
     * @default false
     * @memberof IonicSelectableComponent
     */
    get canAddItem() {
        return this._canAddItem;
    }
    set canAddItem(canAddItem) {
        this._canAddItem = !!canAddItem;
        this._countFooterButtons();
    }
    constructor(_modalController, _platform, ionItem, _iterableDiffers, _element, _renderer) {
        this._modalController = _modalController;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this._element = _element;
        this._renderer = _renderer;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._shouldBackdropClose = true;
        this._isOpened = false;
        this._value = null;
        this._canClear = false;
        this._canSelectAll = false;
        this._hasConfirmButton = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._hasIonLabel = false;
        this._ionLabelPosition = null;
        this._label = null;
        this._valueItems = [];
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this._hasFilteredItems = false;
        /**
         * A list of items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#items).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.items = [];
        this.itemsChange = new EventEmitter();
        /**
         * Modal CSS class.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalcssclass).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalCssClass = null;
        /**
         * Modal enter animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalenteranimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalEnterAnimation = null;
        /**
         * Modal leave animation.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#modalleaveanimation).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.modalLeaveAnimation = null;
        /**
         * Determines whether Confirm button is enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#isconfirmbuttonenabled).
         *
         * @default true
         * @memberof IonicSelectableComponent
         */
        this.isConfirmButtonEnabled = true;
        /**
         * Item property to use as a unique identifier, e.g, `'id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.itemValueField = null;
        /**
         * Item property to display, e.g, `'name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemtextfield).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.itemTextField = null;
        /**
         *
         * Group property to use as a unique identifier to group items, e.g. `'country.id'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupvaluefield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupValueField = null;
        /**
         * Group property to display, e.g. `'country.name'`.
         * **Note**: `items` should be an object array.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#grouptextfield).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupTextField = null;
        /**
         * Determines whether to show Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansearch).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSearch = false;
        this.selectAllText = 'Select All';
        /**
         * Determines whether Ionic [InfiniteScroll](https://ionicframework.com/docs/api/components/infinite-scroll/InfiniteScroll/) is enabled.
         * **Note**: Infinite scroll cannot be used together with virtual scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasinfinitescroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasInfiniteScroll = false;
        /**
         * Determines whether Ionic [VirtualScroll](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/) is enabled.
         * **Note**: Virtual scroll cannot be used together with infinite scroll.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvirtualscroll).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.hasVirtualScroll = false;
        /**
         * See Ionic VirtualScroll [approxItemHeight](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollapproxitemheight).
         *
         * @default '40px'
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollApproxItemHeight = '40px';
        /**
         * A placeholder for Searchbar.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchplaceholder).
         *
         * @default 'Search'
         * @memberof IonicSelectableComponent
         */
        this.searchPlaceholder = 'Search';
        /**
         * A placeholder.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#placeholder).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.placeholder = null;
        /**
         * valueMode
         * Input and Return values not objects. If multiple then array of values of the itemValueField property.
         * (More like a ion-select component)
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.valueMode = false;
        /**
         * Text to display when no items have been found during search.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchfailtext).
         *
         * @default 'No items found.'
         * @memberof IonicSelectableComponent
         */
        this.searchFailText = 'No items found.';
        /**
         * Clear button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clearbuttontext).
         *
         * @default 'Clear'
         * @memberof IonicSelectableComponent
         */
        this.clearButtonText = 'Clear';
        /**
         * Add button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#addbuttontext).
         *
         * @default 'Add'
         * @memberof IonicSelectableComponent
         */
        this.addButtonText = 'Add';
        /**
         * Confirm button text.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirmbuttontext).
         *
         * @default 'OK'
         * @memberof IonicSelectableComponent
         */
        this.confirmButtonText = 'OK';
        /**
         * Close button text.
         * The field is only applicable to **iOS** platform, on **Android** only Cross icon is displayed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttontext).
         *
         * @default 'Cancel'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonText = 'Cancel';
        /**
         * Determines whether Searchbar should receive focus when Modal is opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldfocussearchbar).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldFocusSearchbar = false;
        /**
         * Header color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#headercolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.headerColor = null;
        /**
         * Group color. [Ionic colors](https://ionicframework.com/docs/theming/advanced#colors) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#groupcolor).
         *
         * @default null
         * @memberof IonicSelectableComponent
         */
        this.groupColor = null;
        /**
         * Close button slot. [Ionic slots](https://ionicframework.com/docs/api/buttons) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#closebuttonslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.closeButtonSlot = 'start';
        /**
         * Item icon slot. [Ionic slots](https://ionicframework.com/docs/api/item) are supported.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#itemiconslot).
         *
         * @default 'start'
         * @memberof IonicSelectableComponent
         */
        this.itemIconSlot = 'start';
        /**
         * Fires when item/s has been selected and Modal closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onchange).
         *
         * @memberof IonicSelectableComponent
         */
        this.onChange = new EventEmitter();
        /**
         * Fires when the user is typing in Searchbar.
         * **Note**: `canSearch` and `isOnSearchEnabled` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearch).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearch = new EventEmitter();
        /**
         * Fires when no items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchfail).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchFail = new EventEmitter();
        /**
         * Fires when some items have been found.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsearchsuccess).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSearchSuccess = new EventEmitter();
        /**
         * Fires when the user has scrolled to the end of the list.
         * **Note**: `hasInfiniteScroll` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#oninfinitescroll).
         *
         * @memberof IonicSelectableComponent
         */
        this.onInfiniteScroll = new EventEmitter();
        /**
         * Fires when Modal has been opened.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onopen).
         *
         * @memberof IonicSelectableComponent
         */
        this.onOpen = new EventEmitter();
        /**
         * Fires when Modal has been closed.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclose).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClose = new EventEmitter();
        /**
         * Fires when an item has been selected or unselected.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onselect).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSelect = new EventEmitter();
        /**
         * Fires when Clear button has been clicked.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onclear).
         *
         * @memberof IonicSelectableComponent
         */
        this.onClear = new EventEmitter();
        /**
         * How long, in milliseconds, to wait to filter items or to trigger `onSearch` event after each keystroke.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#searchdebounce).
         *
         * @default 250
         * @memberof IonicSelectableComponent
         */
        this.searchDebounce = 250;
        /**
         * A list of items to disable.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableditems).
         *
         * @default []
         * @memberof IonicSelectableComponent
         */
        this.disabledItems = [];
        /**
         * Determines whether item value only should be stored in `ngModel`, not the entire item.
         * **Note**: Item value is defined by `itemValueField`.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#shouldstoreitemvalue).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.shouldStoreItemValue = false;
        /**
         * Determines whether to allow editing items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#cansaveitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canSaveItem = false;
        /**
         * Determines whether to allow deleting items.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#candeleteitem).
         *
         * @default false
         * @memberof IonicSelectableComponent
         */
        this.canDeleteItem = false;
        /**
         * Fires when Edit item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to edit item.
         * **Note**: `canSaveItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onsaveitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onSaveItem = new EventEmitter();
        /**
         * Fires when Delete item button has been clicked.
         * **Note**: `canDeleteItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#ondeleteitem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onDeleteItem = new EventEmitter();
        /**
         * Fires when Add item button has been clicked.
         * When the button has been clicked `ionicSelectableAddItemTemplate` will be shown. Use the template to create a form to add item.
         * **Note**: `canAddItem` has to be enabled.
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#onadditem).
         *
         * @memberof IonicSelectableComponent
         */
        this.onAddItem = new EventEmitter();
        /**
         * See Ionic VirtualScroll [headerFn](https://ionicframework.com/docs/api/components/virtual-scroll/VirtualScroll/).
         * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#virtualscrollheaderfn).
         *
         * @memberof IonicSelectableComponent
         */
        this.virtualScrollHeaderFn = () => null;
        this.propagateOnChange = (_) => { };
        this.propagateOnTouched = () => { };
        this.startsWith = (input, search) => {
            return input.substr(0, search.length) === search;
        };
        this.getClasses = (element) => {
            const classList = element.classList;
            const classes = [];
            for (let i = 0; i < classList.length; i++) {
                const item = classList.item(i);
                if (item !== null && this.startsWith(item, 'ng-')) {
                    classes.push(`ion-${item.substr(3)}`);
                }
            }
            return classes;
        };
        this.setClasses = (element, classes) => {
            const classList = element.classList;
            [
                'ion-valid',
                'ion-invalid',
                'ion-touched',
                'ion-untouched',
                'ion-dirty',
                'ion-pristine',
            ].forEach((c) => classList.remove(c));
            classes.forEach((c) => classList.add(c));
        };
        this.raf = (h) => {
            if (typeof __zone_symbol__requestAnimationFrame === 'function') {
                return __zone_symbol__requestAnimationFrame(h);
            }
            if (typeof requestAnimationFrame === 'function') {
                return requestAnimationFrame(h);
            }
            return setTimeout(h);
        };
        this.setIonicClasses = (element) => {
            this.raf(() => {
                const input = element.nativeElement;
                const classes = this.getClasses(input);
                this.setClasses(input, classes);
                const item = input.closest('ion-item');
                if (item) {
                    this.setClasses(item, classes);
                }
            });
        };
        this.setItemClass = (element, className, addClass) => {
            const input = element.nativeElement;
            const item = input.closest('ion-item');
            if (item) {
                const classList = item.classList;
                if (addClass) {
                    classList.add(className);
                }
                else {
                    classList.remove(className);
                }
            }
        };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    initFocus() { }
    enableIonItem(isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.disabled = !isEnabled;
    }
    _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
    _setHasSearchText() {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    }
    _hasOnSearch() {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    }
    _hasOnSaveItem() {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    }
    _hasOnAddItem() {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    }
    _hasOnDeleteItem() {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    }
    _emitValueChange() {
        let v;
        // even though using array of objects for list, we have option to return just list of values
        // similar to an ion-select
        if (this._hasObjects && this.valueMode) {
            if (this._isMultiple && this.value && this.value.length > 0) {
                v = [];
                for (let p of this.value) {
                    v.push(this._getItemValue(p));
                }
            }
            else {
                v = this._getItemValue(this.value);
            }
        }
        else {
            v = this.value;
        }
        this.propagateOnChange(v);
        this.onChange.emit({
            component: this,
            value: v
        });
    }
    _emitSearch() {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    }
    _emitOnSelect(item, isSelected) {
        this.onSelect.emit({
            component: this,
            item,
            isSelected
        });
    }
    _emitOnClear(items) {
        this.onClear.emit({
            component: this,
            items
        });
    }
    _emitOnSearchSuccessOrFail(isSuccess) {
        const eventData = {
            component: this,
            text: this._searchText
        };
        if (isSuccess) {
            this.onSearchSuccess.emit(eventData);
        }
        else {
            this.onSearchFail.emit(eventData);
        }
    }
    _formatItem(item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    }
    _formatValueItem(item) {
        if (this._shouldStoreItemValue) {
            const compareValue = typeof item === 'object' ? item[this.itemValueField] : item;
            // Get item text from the list as we store it's value only.
            const selectedItem = this.items.find(_item => _item[this.itemValueField] === compareValue);
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    }
    _getItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        if (this.valueMode && item == null) {
            return null;
        }
        return item[this.itemValueField];
    }
    _getStoredItemValue(item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item[this.itemValueField] : item;
    }
    _onSearchbarClear() {
        // Ionic Searchbar doesn't clear bind with ngModel value.
        // Do it ourselves.
        this._searchText = '';
    }
    _filterItems() {
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            let groups = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups = this._groups;
            }
            else {
                const filterText = this._searchText.trim().toLowerCase();
                this._groups.forEach(group => {
                    const items = group.items.filter(item => {
                        const itemText = (this.itemTextField ?
                            item[this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText) !== -1;
                    });
                    if (items.length) {
                        groups.push({
                            value: group.value,
                            text: group.text,
                            items
                        });
                    }
                });
                // No items found.
                if (!groups.length) {
                    groups.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups;
            this._hasFilteredItems = !this._areGroupsEmpty(groups);
            this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
        }
    }
    _isItemDisabled(item) {
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(_item => this._getItemValue(_item) === this._getItemValue(item));
    }
    _isItemSelected(item) {
        // NOTE - selected items can be objects or values, depending on what the item list consists of (objects or values) and whether shouldStoreItemValue and itemValueField is set. 
        // comparison can only be made against scalars so this function has to get appropriate scalars to compare.
        // the value to compare the selected list items against. Gets the item[itemValueField] value (usually id) if item is an object or just the value if item is not an object
        const itemValue = this._getItemValue(item);
        const result = this._selectedItems.find(selectedItem => itemValue === (typeof selectedItem === 'object' ? selectedItem[this.itemValueField] : selectedItem)) !== undefined;
        return result;
    }
    _addSelectedItem(item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    }
    _deleteSelectedItem(item) {
        let itemToDeleteIndex;
        const itemValue = this._getItemValue(item);
        this._selectedItems.forEach((selectedItem, itemIndex) => {
            if (itemValue === (typeof selectedItem === 'object' ? selectedItem[this.itemValueField] : selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    }
    _click() {
        if (!this.isEnabled) {
            return;
        }
        this._label = this._getLabelText();
        this.open().then(() => {
            this.onOpen.emit({
                component: this
            });
        }).catch((e) => {
            // only seems to catch if already opened which can happen on slow network and someone double taps
            //console.log('caught ',e); //sjd 
        });
    }
    _saveItem(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _deleteItemClick(event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    }
    _addItemClick() {
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    }
    _positionAddItemTemplate() {
        // Wait for the template to render.
        setTimeout(() => {
            const footer = this._modalComponent._element.nativeElement
                .querySelector('.ionic-selectable-add-item-template ion-footer');
            this._addItemTemplateFooterHeight = footer ? `calc(100% - ${footer.offsetHeight}px)` : '100%';
        }, 100);
    }
    _close() {
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
        if (!this._hasOnSearch()) {
            this._searchText = '';
            this._setHasSearchText();
        }
    }
    _selectAll() {
        if (this.isMultiple && this.items) {
            this._selectedItems = [];
            this.items.map(item => {
                this._addSelectedItem(item);
            });
            this._setItemsToConfirm(this._selectedItems);
        }
    }
    _clear() {
        const selectedItems = this._selectedItems;
        this.clear();
        this._emitValueChange();
        this._emitOnClear(selectedItems);
        if (this.isMultiple) {
            this._selectedItems = [];
            this._itemsToConfirm = [];
            return;
        }
        this.close().then(() => {
            this.onClose.emit({
                component: this
            });
        });
    }
    _getMoreItems() {
        this.onInfiniteScroll.emit({
            component: this,
            text: this._searchText
        });
    }
    _setItemsToConfirm(items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this._itemsToConfirm = [].concat(items);
    }
    _doSelect(selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    }
    _select(item) {
        const isItemSelected = this._isItemSelected(item);
        if (this.isMultiple) {
            if (isItemSelected) {
                this._deleteSelectedItem(item);
            }
            else {
                this._addSelectedItem(item);
            }
            this._setItemsToConfirm(this._selectedItems);
            // Emit onSelect event after setting items to confirm so they could be used
            // inside the event.
            this._emitOnSelect(item, !isItemSelected);
        }
        else {
            if (this.hasConfirmButton || this.footerTemplate) {
                // Don't close Modal and keep track on items to confirm.
                // When footer template is used it's up to developer to close Modal.
                this._selectedItems = [];
                if (isItemSelected) {
                    this._deleteSelectedItem(item);
                }
                else {
                    this._addSelectedItem(item);
                }
                this._setItemsToConfirm(this._selectedItems);
                // Emit onSelect event after setting items to confirm so they could be used
                // inside the event.
                this._emitOnSelect(item, !isItemSelected);
            }
            else {
                if (!isItemSelected) {
                    this._selectedItems = [];
                    this._addSelectedItem(item);
                    // Emit onSelect before onChange.
                    this._emitOnSelect(item, true);
                    if (this._shouldStoreItemValue) {
                        this._doSelect(this._getItemValue(item));
                    }
                    else {
                        this._doSelect(item);
                    }
                }
                this._close();
            }
        }
    }
    _confirm() {
        this.confirm();
        this._close();
    }
    _getLabelText() {
        if (this.title)
            return this.title;
        return this._ionLabelElement ? this._ionLabelElement.textContent : null;
    }
    _areGroupsEmpty(groups) {
        return groups.length === 0 || groups.every(group => !group.items || group.items.length === 0);
    }
    _countFooterButtons() {
        let footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple || this._hasConfirmButton) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    }
    _setItems(items) {
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-selectable/issues/70.
        let groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(item => {
                    const groupValue = this._getPropertyValue(item, this.groupValueField);
                    const group = groups.find(_group => _group.value === groupValue);
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: this._getPropertyValue(item, this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
        this._hasFilteredItems = !this._areGroupsEmpty(this._filteredGroups);
    }
    _getPropertyValue(object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce((_object, _property) => _object ? _object[_property] : null, object);
    }
    _setIonItemHasFocus(hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-focus', hasFocus);
    }
    _setIonItemHasValue() {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this._setIonItemCssClass('item-has-value', this.hasValue());
    }
    _setHasPlaceholder() {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    }
    _setIonItemCssClass(cssClass, shouldAdd) {
        if (!this._ionItemElement) {
            return;
        }
        // Change to Renderer2
        if (shouldAdd) {
            this._renderer.addClass(this._ionItemElement, cssClass);
        }
        else {
            this._renderer.removeClass(this._ionItemElement, cssClass);
        }
    }
    _toggleAddItemTemplate(isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    }
    onButtonFocus() {
        this._setIonItemCssClass('item-has-focus', true);
    }
    onButtonBlur() {
        this._setIonItemCssClass('item-has-focus', false);
    }
    /* ControlValueAccessor */
    writeValue(value) {
        // allow being passed a string or number if using itemValue field and find that value in the item list
        if (value && typeof value != 'object' && this._hasObjects) {
            let v = this.items.filter((item) => value === item[this.itemValueField]);
            if (v)
                value = v[0];
        }
        this.value = value;
    }
    registerOnChange(method) {
        this.propagateOnChange = method;
    }
    registerOnTouched(method) {
        this.propagateOnTouched = method;
    }
    setDisabledState(isDisabled) {
        this.isEnabled = !isDisabled;
    }
    /* .ControlValueAccessor */
    ngOnInit() {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        if (this.ionItem) {
            this._ionItemElement = this._element.nativeElement.closest('ion-item');
            this._setIonItemCssClass('item-interactive', true);
            this._setIonItemCssClass('item-ionic-selectable', true);
            if (this._ionItemElement) {
                this._ionLabelElement = this._ionItemElement.querySelector('ion-label');
                if (this._ionLabelElement) {
                    this._hasIonLabel = true;
                    this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
                }
            }
        }
        this.enableIonItem(this.isEnabled);
    }
    ngDoCheck() {
        const itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    }
    /**
     * Adds item.
     * **Note**: If you want an item to be added to the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#additem).
     *
     * @param item Item to add.
     * @returns Promise that resolves when item has been added.
     * @memberof IonicSelectableComponent
     */
    addItem(item) {
        const self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise or user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise((resolve, reject) => {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._addItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Deletes item.
     * **Note**: If you want an item to be deleted from the original array as well use two-way data binding syntax on `[(items)]` field.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#deleteitem).
     *
     * @param item Item to delete.
     * @returns Promise that resolves when item has been deleted.
     * @memberof IonicSelectableComponent
     */
    deleteItem(item) {
        const self = this;
        let hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(_item => this._getItemValue(item) !== this._getStoredItemValue(_item));
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                const values = this.value.filter(value => value.id !== item.id);
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        const items = this.items.filter(_item => _item.id !== item.id);
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(() => {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, () => {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    }
    /**
     * Determines whether any item has been selected.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hasvalue).
     *
     * @returns A boolean determining whether any item has been selected.
     * @memberof IonicSelectableComponent
     */
    hasValue() {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    }
    /**
     * Opens Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#open).
     *
     * @returns Promise that resolves when Modal has been opened.
     * @memberof IonicSelectableComponent
     */
    open() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                // reject('IonicSelectable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            const modalOptions = {
                component: IonicSelectableModalComponent,
                componentProps: { selectComponent: self },
                backdropDismiss: self._shouldBackdropClose
            };
            if (self.modalCssClass) {
                modalOptions.cssClass = self.modalCssClass;
            }
            if (self.modalEnterAnimation) {
                modalOptions.enterAnimation = self.modalEnterAnimation;
            }
            if (self.modalLeaveAnimation) {
                modalOptions.leaveAnimation = self.modalLeaveAnimation;
            }
            self._modalController.create(modalOptions).then(modal => {
                self._modal = modal;
                modal.present().then(() => {
                    // Set focus after Modal has opened to avoid flickering of focus highlighting
                    // before Modal opening.
                    self._setIonItemHasFocus(true);
                    resolve();
                });
                modal.onWillDismiss().then(() => {
                    self._setIonItemHasFocus(false);
                });
                modal.onDidDismiss().then(event => {
                    self._isOpened = false;
                    self._itemsToConfirm = [];
                    // Closed by clicking on backdrop outside modal.
                    if (event.role === 'backdrop') {
                        self.onClose.emit({
                            component: self
                        });
                    }
                });
            });
        });
    }
    /**
     * Closes Modal.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#close).
     *
     * @returns Promise that resolves when Modal has been closed.
     * @memberof IonicSelectableComponent
     */
    close() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                //reject('IonicSelectable is disabled or already closed.'); //sjd removed not useful.
                return;
            }
            self.propagateOnTouched();
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(() => {
                // sjd self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    }
    /**
     * Clears value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#clear).
     *
     * @memberof IonicSelectableComponent
     */
    clear() {
        this.value = this.isMultiple ? [] : null;
        this._itemsToConfirm = [];
        this.propagateOnChange(this.value);
    }
    /**
     * Confirms selected items by updating value.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#confirm).
     *
     * @memberof IonicSelectableComponent
     */
    confirm() {
        if (this.isMultiple) {
            this._doSelect(this._selectedItems);
        }
        else if (this.hasConfirmButton || this.footerTemplate) {
            this._doSelect(this._selectedItems[0] || null);
        }
    }
    /**
     * Selects or deselects all or specific items.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#toggleitems).
     *
     * @param isSelect Determines whether to select or deselect items.
     * @param [items] Items to toggle. If items are not set all items will be toggled.
     * @memberof IonicSelectableComponent
     */
    toggleItems(isSelect, items) {
        if (isSelect) {
            const hasItems = items && items.length;
            let itemsToToggle = this._groups.reduce((allItems, group) => allItems.concat(group.items), []);
            // Don't allow to select all items in single mode.
            if (!this.isMultiple && !hasItems) {
                itemsToToggle = [];
            }
            // Toggle specific items.
            if (hasItems) {
                itemsToToggle = itemsToToggle.filter(itemToToggle => items.find(item => this._getItemValue(itemToToggle) === this._getItemValue(item)) !== undefined);
                // Take the first item for single mode.
                if (!this.isMultiple) {
                    itemsToToggle.splice(0, 1);
                }
            }
            itemsToToggle.forEach(item => {
                this._addSelectedItem(item);
            });
        }
        else {
            this._selectedItems = [];
        }
        this._setItemsToConfirm(this._selectedItems);
    }
    /**
     * Scrolls to the top of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltotop).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToTop() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToTop().then(() => {
                resolve();
            });
        });
    }
    /**
     * Scrolls to the bottom of Modal content.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#scrolltobottom).
     *
     * @returns Promise that resolves when scroll has been completed.
     * @memberof IonicSelectableComponent
     */
    scrollToBottom() {
        const self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('IonicSelectable content cannot be scrolled.');
                return;
            }
            self._modalComponent._content.scrollToBottom().then(() => {
                resolve();
            });
        });
    }
    /**
     * Starts search process by showing Loading spinner.
     * Use it together with `onSearch` event to indicate search start.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#startsearch).
     *
     * @memberof IonicSelectableComponent
     */
    startSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    }
    /**
     * Ends search process by hiding Loading spinner and refreshing items.
     * Use it together with `onSearch` event to indicate search end.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endsearch).
     *
     * @memberof IonicSelectableComponent
     */
    endSearch() {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-selectable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        this._emitOnSearchSuccessOrFail(this._hasFilteredItems);
    }
    /**
     * Enables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#enableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    enableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = false;
    }
    /**
     * Disables infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#disableinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    disableInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.disabled = true;
    }
    /**
     * Ends infinite scroll.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#endinfinitescroll).
     *
     * @memberof IonicSelectableComponent
     */
    endInfiniteScroll() {
        if (!this._hasInfiniteScroll) {
            return;
        }
        this._modalComponent._infiniteScroll.complete();
        this._setItems(this.items);
    }
    /**
     * Triggers search of items.
     * **Note**: `canSearch` has to be enabled.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#search).
     *
     * @param text Text to search items by.
     * @memberof IonicSelectableComponent
     */
    search(text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    }
    /**
     * Shows Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showloading).
     *
     * @memberof IonicSelectableComponent
     */
    showLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    }
    /**
     * Hides Loading spinner.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideloading).
     *
     * @memberof IonicSelectableComponent
     */
    hideLoading() {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    }
    /**
     * Shows `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#showadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    showAddItemTemplate() {
        this._toggleAddItemTemplate(true);
        // Position the template only when it shous up.
        this._positionAddItemTemplate();
    }
    /**
     * Hides `ionicSelectableAddItemTemplate`.
     * See more on [GitHub](https://github.com/eakoriakin/ionic-selectable/wiki/Documentation#hideadditemtemplate).
     *
     * @memberof IonicSelectableComponent
     */
    hideAddItemTemplate() {
        // Clean item to add as it's no longer needed once Add Item Modal has been closed.
        this._itemToAdd = null;
        this._toggleAddItemTemplate(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IonicSelectableComponent, deps: [{ token: i1.ModalController }, { token: i1.Platform }, { token: i1.IonItem, optional: true }, { token: i0.IterableDiffers }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: IonicSelectableComponent, selector: "ionic-selectable", inputs: { items: "items", isEnabled: "isEnabled", shouldBackdropClose: "shouldBackdropClose", modalCssClass: "modalCssClass", modalEnterAnimation: "modalEnterAnimation", modalLeaveAnimation: "modalLeaveAnimation", isConfirmButtonEnabled: "isConfirmButtonEnabled", hasConfirmButton: "hasConfirmButton", itemValueField: "itemValueField", itemTextField: "itemTextField", groupValueField: "groupValueField", groupTextField: "groupTextField", canSearch: "canSearch", isOnSearchEnabled: "isOnSearchEnabled", canClear: "canClear", canSelectAll: "canSelectAll", selectAllText: "selectAllText", hasInfiniteScroll: "hasInfiniteScroll", hasVirtualScroll: "hasVirtualScroll", virtualScrollApproxItemHeight: "virtualScrollApproxItemHeight", searchPlaceholder: "searchPlaceholder", placeholder: "placeholder", valueMode: "valueMode", isMultiple: "isMultiple", searchFailText: "searchFailText", clearButtonText: "clearButtonText", addButtonText: "addButtonText", confirmButtonText: "confirmButtonText", closeButtonText: "closeButtonText", shouldFocusSearchbar: "shouldFocusSearchbar", headerColor: "headerColor", groupColor: "groupColor", closeButtonSlot: "closeButtonSlot", itemIconSlot: "itemIconSlot", searchDebounce: "searchDebounce", disabledItems: "disabledItems", shouldStoreItemValue: "shouldStoreItemValue", canSaveItem: "canSaveItem", canDeleteItem: "canDeleteItem", title: "title", canAddItem: "canAddItem", ariaLabel: "ariaLabel", virtualScrollHeaderFn: "virtualScrollHeaderFn" }, outputs: { itemsChange: "itemsChange", onChange: "onChange", onSearch: "onSearch", onSearchFail: "onSearchFail", onSearchSuccess: "onSearchSuccess", onInfiniteScroll: "onInfiniteScroll", onOpen: "onOpen", onClose: "onClose", onSelect: "onSelect", onClear: "onClear", onSaveItem: "onSaveItem", onDeleteItem: "onDeleteItem", onAddItem: "onAddItem" }, host: { properties: { "class.ionic-selectable": "this._cssClass", "class.ionic-selectable-ios": "this._isIos", "class.ionic-selectable-md": "this._isMD", "class.ionic-selectable-is-multiple": "this._isMultipleCssClass", "class.ionic-selectable-has-value": "this._hasValueCssClass", "class.ionic-selectable-has-placeholder": "this._hasPlaceholderCssClass", "class.ionic-selectable-has-label": "this._hasIonLabelCssClass", "class.ionic-selectable-label-default": "this._hasDefaultIonLabelCssClass", "class.ionic-selectable-label-fixed": "this._hasFixedIonLabelCssClass", "class.ionic-selectable-label-stacked": "this._hasStackedIonLabelCssClass", "class.ionic-selectable-label-floating": "this._hasFloatingIonLabelCssClass", "class.ionic-selectable-is-enabled": "this.isEnabled", "class.ionic-selectable-can-clear": "this.canClear", "class.ionic-selectable-can-selectall": "this.canSelectAll" } }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => IonicSelectableComponent),
                multi: true
            }], queries: [{ propertyName: "valueTemplate", first: true, predicate: IonicSelectableValueTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemTemplate", first: true, predicate: IonicSelectableItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemEndTemplate", first: true, predicate: IonicSelectableItemEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "titleTemplate", first: true, predicate: IonicSelectableTitleTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "placeholderTemplate", first: true, predicate: IonicSelectablePlaceholderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "messageTemplate", first: true, predicate: IonicSelectableMessageTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupTemplate", first: true, predicate: IonicSelectableGroupTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "groupEndTemplate", first: true, predicate: IonicSelectableGroupEndTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "closeButtonTemplate", first: true, predicate: IonicSelectableCloseButtonTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "searchFailTemplate", first: true, predicate: IonicSelectableSearchFailTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "addItemTemplate", first: true, predicate: IonicSelectableAddItemTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "footerTemplate", first: true, predicate: IonicSelectableFooterTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "headerTemplate", first: true, predicate: IonicSelectableHeaderTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "itemIconTemplate", first: true, predicate: IonicSelectableItemIconTemplateDirective, descendants: true, read: TemplateRef }, { propertyName: "iconTemplate", first: true, predicate: IonicSelectableIconTemplateDirective, descendants: true, read: TemplateRef }], ngImport: i0, template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button (focus)=\"onButtonFocus()\" (blur)=\"onButtonBlur()\" class=\"ionic-selectable-cover\" [ariaLabel]=\"ariaLabel\" [disabled]=\"!isEnabled\" tabindex=\"0\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color, #999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-selectable-icon-template{align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;inset:0;z-index:1}.ionic-selectable-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable-label-stacked,.ionic-selectable-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-stacked .ionic-selectable-value,.ionic-selectable-label-floating .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-stacked .ionic-selectable-icon-inner,.ionic-selectable-label-floating .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start, 16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: IonicSelectableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ionic-selectable', encapsulation: ViewEncapsulation.None, providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => IonicSelectableComponent),
                            multi: true
                        }], template: "<div class=\"ionic-selectable-inner\">\n  <div class=\"ionic-selectable-value\">\n    <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\"\n      [ngTemplateOutlet]=\"valueTemplate\"\n      [ngTemplateOutletContext]=\"{ value: _valueItems }\">\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\">\n      <div [ngTemplateOutlet]=\"valueTemplate\"\n        [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\">\n      </div>\n    </div>\n    <span *ngIf=\"!valueTemplate && _valueItems.length\">\n      <div class=\"ionic-selectable-value-item\"\n        *ngFor=\"let valueItem of _valueItems\">\n        {{_formatValueItem(valueItem)}}\n      </div>\n    </span>\n    <div *ngIf=\"_hasPlaceholder && placeholderTemplate\"\n      class=\"ionic-selectable-value-item\">\n      <div [ngTemplateOutlet]=\"placeholderTemplate\">\n      </div>\n    </div>\n    <div class=\"ionic-selectable-value-item\"\n      *ngIf=\"_hasPlaceholder && !placeholderTemplate\">\n      {{placeholder}}\n    </div>\n    <!-- Fix icon allignment when there's no value or placeholder. -->\n    <span *ngIf=\"!_valueItems.length && !_hasPlaceholder\">&nbsp;</span>\n  </div>\n  <div *ngIf=\"iconTemplate\" class=\"ionic-selectable-icon-template\">\n      <div [ngTemplateOutlet]=\"iconTemplate\"></div>\n  </div>\n  <div *ngIf=\"!iconTemplate\" class=\"ionic-selectable-icon\">\n    <div class=\"ionic-selectable-icon-inner\"></div>\n  </div>\n  <!-- Need to be type=\"button\" otherwise click event triggers form ngSubmit. -->\n  <button (focus)=\"onButtonFocus()\" (blur)=\"onButtonBlur()\" class=\"ionic-selectable-cover\" [ariaLabel]=\"ariaLabel\" [disabled]=\"!isEnabled\" tabindex=\"0\"\n    (click)=\"_click()\" type=\"button\">\n  </button>\n</div>\n", styles: [".item-ionic-selectable .item-inner .input-wrapper{align-items:normal}.item-ionic-selectable ion-label{flex:1;max-width:initial}.ionic-selectable{display:block;max-width:45%}.ionic-selectable-inner{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:flex-end}.ionic-selectable-has-placeholder .ionic-selectable-value-item{color:var(--placeholder-color, #999)}.ionic-selectable-value{flex:1;padding-top:13px;padding-bottom:13px;overflow:hidden}.ionic-selectable-value-item{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.ionic-selectable-value-item:not(:last-child){margin-bottom:5px}.ionic-selectable-icon{position:relative;width:20px}.ionic-selectable-icon-inner{position:absolute;top:20px;left:5px;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;pointer-events:none;color:var(--icon-color, #999)}.ionic-selectable-icon-template{align-self:center;margin-left:5px}.ionic-selectable-ios .ionic-selectable-value{padding-top:11px;padding-bottom:11px}.ionic-selectable-ios .ionic-selectable-icon-inner{top:19px}.ionic-selectable-spinner{position:fixed;inset:0;z-index:1}.ionic-selectable-spinner-background{inset:0;position:absolute;background-color:#000;opacity:.05}.ionic-selectable-spinner ion-spinner{position:absolute;top:50%;left:50%;z-index:10;margin-top:-14px;margin-left:-14px}.ionic-selectable-cover{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:0 0;cursor:pointer;appearance:none;outline:0}.ionic-selectable-add-item-template{position:fixed;bottom:0;left:0;right:0;background-color:#fff}.ionic-selectable-add-item-template-inner{overflow-y:auto}.ionic-selectable-add-item-template-inner>ion-footer{bottom:0;position:absolute}.ionic-selectable:not(.ionic-selectable-has-label){max-width:100%;width:100%}.ionic-selectable-label-stacked,.ionic-selectable-label-floating{align-self:stretch;max-width:100%;padding-left:0;padding-top:8px;padding-bottom:8px}.ionic-selectable-label-stacked .ionic-selectable-value,.ionic-selectable-label-floating .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:19px}.ionic-selectable-label-stacked .ionic-selectable-icon-inner,.ionic-selectable-label-floating .ionic-selectable-icon-inner{top:7px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-value,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-value{padding-top:0;padding-bottom:0;min-height:20px}.ionic-selectable-label-stacked.ionic-selectable-ios .ionic-selectable-icon-inner,.ionic-selectable-label-floating.ionic-selectable-ios .ionic-selectable-icon-inner{top:8px}.ionic-selectable-label-default .ionic-selectable-value,.ionic-selectable-label-fixed .ionic-selectable-value{padding-left:var(--padding-start, 16px)}.ionic-selectable-label-fixed:not(.ionic-selectable-has-value) .ionic-selectable-value{padding-left:calc(var(--padding-start, 16px) + 11px)}.ionic-selectable-modal .ionic-selectable-group ion-item-divider{padding-right:16px}.ionic-selectable-modal .ionic-selectable-item-button{margin-left:8px;margin-right:8px}.ionic-selectable-modal-ios .ionic-selectable-message{padding:8px}.ionic-selectable-modal-ios .ionic-selectable-group ion-item-divider{padding-right:8px}.ionic-selectable-modal-md .ionic-selectable-message{padding:8px 12px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:first-child{padding-right:8px}.ionic-selectable-modal.ionic-selectable-modal-can-clear.ionic-selectable-modal-is-multiple .footer .col:last-child{padding-left:8px}.ionic-selectable-modal.ionic-selectable-modal-is-searching .scroll-content{overflow-y:hidden}.ionic-selectable-modal.ionic-selectable-modal-is-add-item-template-visible>.content>.scroll-content{overflow-y:hidden}.ionic-selectable-modal ion-header ion-toolbar:first-of-type{padding-top:var(--ion-safe-area-top, 0)}\n"] }]
        }], ctorParameters: () => [{ type: i1.ModalController }, { type: i1.Platform }, { type: i1.IonItem, decorators: [{
                    type: Optional
                }] }, { type: i0.IterableDiffers }, { type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { _cssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable']
            }], _isIos: [{
                type: HostBinding,
                args: ['class.ionic-selectable-ios']
            }], _isMD: [{
                type: HostBinding,
                args: ['class.ionic-selectable-md']
            }], _isMultipleCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-is-multiple']
            }], _hasValueCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-value']
            }], _hasPlaceholderCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-placeholder']
            }], _hasIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-has-label']
            }], _hasDefaultIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-default']
            }], _hasFixedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-fixed']
            }], _hasStackedIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-stacked']
            }], _hasFloatingIonLabelCssClass: [{
                type: HostBinding,
                args: ['class.ionic-selectable-label-floating']
            }], items: [{
                type: Input
            }], itemsChange: [{
                type: Output
            }], isEnabled: [{
                type: HostBinding,
                args: ['class.ionic-selectable-is-enabled']
            }, {
                type: Input,
                args: ['isEnabled']
            }], shouldBackdropClose: [{
                type: Input,
                args: ['shouldBackdropClose']
            }], modalCssClass: [{
                type: Input
            }], modalEnterAnimation: [{
                type: Input
            }], modalLeaveAnimation: [{
                type: Input
            }], isConfirmButtonEnabled: [{
                type: Input
            }], hasConfirmButton: [{
                type: Input,
                args: ['hasConfirmButton']
            }], itemValueField: [{
                type: Input
            }], itemTextField: [{
                type: Input
            }], groupValueField: [{
                type: Input
            }], groupTextField: [{
                type: Input
            }], canSearch: [{
                type: Input
            }], isOnSearchEnabled: [{
                type: Input,
                args: ['isOnSearchEnabled']
            }], canClear: [{
                type: HostBinding,
                args: ['class.ionic-selectable-can-clear']
            }, {
                type: Input,
                args: ['canClear']
            }], canSelectAll: [{
                type: HostBinding,
                args: ['class.ionic-selectable-can-selectall']
            }, {
                type: Input,
                args: ['canSelectAll']
            }], selectAllText: [{
                type: Input
            }], hasInfiniteScroll: [{
                type: Input
            }], hasVirtualScroll: [{
                type: Input
            }], virtualScrollApproxItemHeight: [{
                type: Input
            }], searchPlaceholder: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], valueMode: [{
                type: Input
            }], isMultiple: [{
                type: Input,
                args: ['isMultiple']
            }], searchFailText: [{
                type: Input
            }], clearButtonText: [{
                type: Input
            }], addButtonText: [{
                type: Input
            }], confirmButtonText: [{
                type: Input
            }], closeButtonText: [{
                type: Input
            }], shouldFocusSearchbar: [{
                type: Input
            }], headerColor: [{
                type: Input
            }], groupColor: [{
                type: Input
            }], closeButtonSlot: [{
                type: Input
            }], itemIconSlot: [{
                type: Input
            }], onChange: [{
                type: Output
            }], onSearch: [{
                type: Output
            }], onSearchFail: [{
                type: Output
            }], onSearchSuccess: [{
                type: Output
            }], onInfiniteScroll: [{
                type: Output
            }], onOpen: [{
                type: Output
            }], onClose: [{
                type: Output
            }], onSelect: [{
                type: Output
            }], onClear: [{
                type: Output
            }], searchDebounce: [{
                type: Input
            }], disabledItems: [{
                type: Input
            }], shouldStoreItemValue: [{
                type: Input
            }], canSaveItem: [{
                type: Input
            }], canDeleteItem: [{
                type: Input
            }], title: [{
                type: Input
            }], canAddItem: [{
                type: Input,
                args: ['canAddItem']
            }], ariaLabel: [{
                type: Input
            }], onSaveItem: [{
                type: Output
            }], onDeleteItem: [{
                type: Output
            }], onAddItem: [{
                type: Output
            }], valueTemplate: [{
                type: ContentChild,
                args: [IonicSelectableValueTemplateDirective, { read: TemplateRef }]
            }], itemTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemTemplateDirective, { read: TemplateRef }]
            }], itemEndTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemEndTemplateDirective, { read: TemplateRef }]
            }], titleTemplate: [{
                type: ContentChild,
                args: [IonicSelectableTitleTemplateDirective, { read: TemplateRef }]
            }], placeholderTemplate: [{
                type: ContentChild,
                args: [IonicSelectablePlaceholderTemplateDirective, { read: TemplateRef }]
            }], messageTemplate: [{
                type: ContentChild,
                args: [IonicSelectableMessageTemplateDirective, { read: TemplateRef }]
            }], groupTemplate: [{
                type: ContentChild,
                args: [IonicSelectableGroupTemplateDirective, { read: TemplateRef }]
            }], groupEndTemplate: [{
                type: ContentChild,
                args: [IonicSelectableGroupEndTemplateDirective, { read: TemplateRef }]
            }], closeButtonTemplate: [{
                type: ContentChild,
                args: [IonicSelectableCloseButtonTemplateDirective, { read: TemplateRef }]
            }], searchFailTemplate: [{
                type: ContentChild,
                args: [IonicSelectableSearchFailTemplateDirective, { read: TemplateRef }]
            }], addItemTemplate: [{
                type: ContentChild,
                args: [IonicSelectableAddItemTemplateDirective, { read: TemplateRef }]
            }], footerTemplate: [{
                type: ContentChild,
                args: [IonicSelectableFooterTemplateDirective, { read: TemplateRef }]
            }], headerTemplate: [{
                type: ContentChild,
                args: [IonicSelectableHeaderTemplateDirective, { read: TemplateRef }]
            }], itemIconTemplate: [{
                type: ContentChild,
                args: [IonicSelectableItemIconTemplateDirective, { read: TemplateRef }]
            }], iconTemplate: [{
                type: ContentChild,
                args: [IonicSelectableIconTemplateDirective, { read: TemplateRef }]
            }], virtualScrollHeaderFn: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy1zZWxlY3RhYmxlL3NyYy9saWIvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb25pYy1zZWxlY3RhYmxlL3NyYy9saWIvaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUIsd0RBQXdEO0FBQ3hELGlEQUFpRDtBQUNqRCx3REFBd0Q7QUFDeEQsdURBQXVEO0FBQ3ZELHlDQUF5QztBQUN6QywyQ0FBMkM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQXVCLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFDdEQsUUFBUSxFQUFFLE1BQU0sRUFBYSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSXpFLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSwyQ0FBMkMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNHLE9B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SSxFQUFFLFdBQVcsRUFBRTtnQkFHNUUsY0FBYztzQkFEYixZQUFZO3VCQUFDLHNDQUFzQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFJM0UsY0FBYztzQkFEYixZQUFZO3VCQUFDLHNDQUFzQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtnQkFHM0UsZ0JBQWdCO3NCQURmLFlBQVk7dUJBQUMsd0NBQXdDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUc3RSxZQUFZO3NCQURYLFlBQVk7dUJBQUMsb0NBQW9DLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQVV6RSxxQkFBcUI7c0JBRHBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtbGVuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItYXJyb3cvcHJlZmVyLWFycm93LWZ1bmN0aW9ucyAqL1xuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlcyAqL1xuLyogZXNsaW50LWRpc2FibGUgQGFuZ3VsYXItZXNsaW50L25vLW91dHB1dC1vbi1wcmVmaXggKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmcgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG5pbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRG9DaGVjaywgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmLCBIb3N0QmluZGluZywgSW5wdXQsXG4gICAgSXRlcmFibGVEaWZmZXIsIEl0ZXJhYmxlRGlmZmVycywgT25Jbml0LCBPcHRpb25hbCwgT3V0cHV0LCBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uSXRlbSwgTW9kYWxDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbkJ1aWxkZXIsIE1vZGFsT3B0aW9ucyB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVDbG9zZUJ1dHRvblRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWNsb3NlLWJ1dHRvbi10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtZm9vdGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVHcm91cEVuZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLWdyb3VwLWVuZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlR3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1ncm91cC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaGVhZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1lbmQtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUl0ZW1JY29uVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVJdGVtVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtaXRlbS10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgSW9uaWNTZWxlY3RhYmxlTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1lc3NhZ2UtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZU1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9pb25pYy1zZWxlY3RhYmxlLXBsYWNlaG9sZGVyLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtc2VhcmNoLWZhaWwtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdGl0bGUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZVZhbHVlVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2lvbmljLXNlbGVjdGFibGUtdmFsdWUtdGVtcGxhdGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IElvbmljU2VsZWN0YWJsZUljb25UZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vaW9uaWMtc2VsZWN0YWJsZS1pY29uLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XG5cbmRlY2xhcmUgY29uc3QgX196b25lX3N5bWJvbF9fcmVxdWVzdEFuaW1hdGlvbkZyYW1lOiBhbnk7XG5kZWNsYXJlIGNvbnN0IHJlcXVlc3RBbmltYXRpb25GcmFtZTogYW55O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uaWMtc2VsZWN0YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9pb25pYy1zZWxlY3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uaWMtc2VsZWN0YWJsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9XVxufSlcbmV4cG9ydCBjbGFzcyBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBEb0NoZWNrIHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlJylcbiAgX2Nzc0NsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWlvcycpXG4gIF9pc0lvczogYm9vbGVhbjtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLW1kJylcbiAgX2lzTUQ6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1tdWx0aXBsZScpXG4gIGdldCBfaXNNdWx0aXBsZUNzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGU7XG4gIH1cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pb25pYy1zZWxlY3RhYmxlLWhhcy12YWx1ZScpXG4gIGdldCBfaGFzVmFsdWVDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5oYXNWYWx1ZSgpO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtcGxhY2Vob2xkZXInKVxuICBnZXQgX2hhc1BsYWNlaG9sZGVyQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1BsYWNlaG9sZGVyO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1oYXMtbGFiZWwnKVxuICBnZXQgX2hhc0lvbkxhYmVsQ3NzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0lvbkxhYmVsO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1kZWZhdWx0JylcbiAgZ2V0IF9oYXNEZWZhdWx0SW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ2RlZmF1bHQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1maXhlZCcpXG4gIGdldCBfaGFzRml4ZWRJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZml4ZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1zdGFja2VkJylcbiAgZ2V0IF9oYXNTdGFja2VkSW9uTGFiZWxDc3NDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW9uTGFiZWxQb3NpdGlvbiA9PT0gJ3N0YWNrZWQnO1xuICB9XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1sYWJlbC1mbG9hdGluZycpXG4gIGdldCBfaGFzRmxvYXRpbmdJb25MYWJlbENzc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pb25MYWJlbFBvc2l0aW9uID09PSAnZmxvYXRpbmcnO1xuICB9XG4gIHByaXZhdGUgX2lzT25TZWFyY2hFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaXNFbmFibGVkID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfc2hvdWxkQmFja2Ryb3BDbG9zZSA9IHRydWU7XG4gIHByaXZhdGUgX2lzT3BlbmVkID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZhbHVlOiBhbnkgPSBudWxsO1xuICBwcml2YXRlIF9tb2RhbDogSFRNTElvbk1vZGFsRWxlbWVudDtcbiAgcHJpdmF0ZSBfaXRlbXNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPGFueT47XG4gIHByaXZhdGUgX2hhc09iamVjdHM6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbkNsZWFyID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhblNlbGVjdEFsbCA9IGZhbHNlO1xuICBwcml2YXRlIF9oYXNDb25maXJtQnV0dG9uID0gZmFsc2U7XG4gIHByaXZhdGUgX2lzTXVsdGlwbGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FuQWRkSXRlbSA9IGZhbHNlO1xuICBwcml2YXRlIF9hZGRJdGVtT2JzZXJ2YWJsZTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF9kZWxldGVJdGVtT2JzZXJ2YWJsZTogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9uSXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwcml2YXRlIF9pb25JdGVtRWxlbWVudDogYW55O1xuICBwcml2YXRlIF9pb25MYWJlbEVsZW1lbnQ6IGFueTtcbiAgcHJpdmF0ZSBfaGFzSW9uTGFiZWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW9uTGFiZWxQb3NpdGlvbjogJ2ZpeGVkJyB8ICdzdGFja2VkJyB8ICdmbG9hdGluZycgfCAnZGVmYXVsdCcgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbGFiZWw6IHN0cmluZyA9IG51bGw7XG4gIHByaXZhdGUgZ2V0IF9oYXNJbmZpbml0ZVNjcm9sbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0VuYWJsZWQgJiYgdGhpcy5fbW9kYWxDb21wb25lbnQgJiZcbiAgICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbCA/IHRydWUgOiBmYWxzZTtcbiAgfVxuICBnZXQgX3Nob3VsZFN0b3JlSXRlbVZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNob3VsZFN0b3JlSXRlbVZhbHVlICYmIHRoaXMuX2hhc09iamVjdHM7XG4gIH1cbiAgX3ZhbHVlSXRlbXM6IGFueVtdID0gW107XG4gIF9zZWFyY2hUZXh0ID0gJyc7XG4gIF9oYXNTZWFyY2hUZXh0ID0gZmFsc2U7XG4gIF9ncm91cHM6IGFueVtdID0gW107XG4gIF9pdGVtc1RvQ29uZmlybTogYW55W10gPSBbXTtcbiAgX3NlbGVjdGVkSXRlbXM6IGFueVtdID0gW107XG4gIF9tb2RhbENvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQ7XG4gIF9maWx0ZXJlZEdyb3VwczogYW55W10gPSBbXTtcbiAgX2hhc0dyb3VwczogYm9vbGVhbjtcbiAgX2lzU2VhcmNoaW5nOiBib29sZWFuO1xuICBfaGFzUGxhY2Vob2xkZXI6IGJvb2xlYW47XG4gIF9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBmYWxzZTtcbiAgX2lzRm9vdGVyVmlzaWJsZSA9IHRydWU7XG4gIF9pdGVtVG9BZGQ6IGFueSA9IG51bGw7XG4gIF9mb290ZXJCdXR0b25zQ291bnQgPSAwO1xuICBfaGFzRmlsdGVyZWRJdGVtcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUZXh0IG9mIFtJb25pYyBMYWJlbF0oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvbGFiZWwpLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNsYWJlbCkuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUZXh0IHRoYXQgdGhlIHVzZXIgaGFzIHR5cGVkIGluIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2VhcmNodGV4dCkuXG4gICAqXG4gICAqIEByZWFkb25seVxuICAgKiBAZGVmYXVsdCAnJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgc2VhcmNoVGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9zZWFyY2hUZXh0O1xuICB9XG4gIHNldCBzZWFyY2hUZXh0KHNlYXJjaFRleHQ6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xuICAgIHRoaXMuX3NldEhhc1NlYXJjaFRleHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgc2VhcmNoIGlzIHJ1bm5pbmcuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzc2VhcmNoaW5nKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQHJlYWRvbmx5XG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGdldCBpc1NlYXJjaGluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTZWFyY2hpbmc7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHVzZXIgaGFzIHR5cGVkIGFueXRoaW5nIGluIFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzc2VhcmNodGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaGFzU2VhcmNoVGV4dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU2VhcmNoVGV4dDtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuICBzZXQgdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cbiAgICAvLyBTZXQgdmFsdWUgaXRlbXMuXG4gICAgdGhpcy5fdmFsdWVJdGVtcy5zcGxpY2UoMCwgdGhpcy5fdmFsdWVJdGVtcy5sZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLl92YWx1ZUl0ZW1zLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHZhbHVlKSkge1xuICAgICAgICB0aGlzLl92YWx1ZUl0ZW1zLnB1c2godmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3NldElvbkl0ZW1IYXNWYWx1ZSgpO1xuICAgIHRoaXMuX3NldEhhc1BsYWNlaG9sZGVyKCk7XG4gICAgdGhpcy5zZXRJb25pY0NsYXNzZXModGhpcy5fZWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQSBsaXN0IG9mIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtcykuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1zOiBhbnlbXSA9IFtdO1xuICBAT3V0cHV0KClcbiAgaXRlbXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBpcyBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc2VuYWJsZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1pcy1lbmFibGVkJylcbiAgQElucHV0KCdpc0VuYWJsZWQnKVxuICBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0VuYWJsZWQ7XG4gIH1cbiAgc2V0IGlzRW5hYmxlZChpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0VuYWJsZWQgPSAhIWlzRW5hYmxlZDtcbiAgICB0aGlzLmVuYWJsZUlvbkl0ZW0odGhpcy5faXNFbmFibGVkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgTW9kYWwgc2hvdWxkIGJlIGNsb3NlZCB3aGVuIGJhY2tkcm9wIGlzIGNsaWNrZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3VsZGJhY2tkcm9wY2xvc2UpLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnc2hvdWxkQmFja2Ryb3BDbG9zZScpXG4gIGdldCBzaG91bGRCYWNrZHJvcENsb3NlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG91bGRCYWNrZHJvcENsb3NlO1xuICB9XG4gIHNldCBzaG91bGRCYWNrZHJvcENsb3NlKHNob3VsZEJhY2tkcm9wQ2xvc2U6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG91bGRCYWNrZHJvcENsb3NlID0gISFzaG91bGRCYWNrZHJvcENsb3NlO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZGFsIENTUyBjbGFzcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jbW9kYWxjc3NjbGFzcykuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgbW9kYWxDc3NDbGFzczogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogTW9kYWwgZW50ZXIgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGVudGVyYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbEVudGVyQW5pbWF0aW9uOiBBbmltYXRpb25CdWlsZGVyID0gbnVsbDtcblxuICAvKipcbiAgICogTW9kYWwgbGVhdmUgYW5pbWF0aW9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNtb2RhbGxlYXZlYW5pbWF0aW9uKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBtb2RhbExlYXZlQW5pbWF0aW9uOiBBbmltYXRpb25CdWlsZGVyID0gbnVsbDtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNvcGVuZWQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAcmVhZG9ubHlcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZ2V0IGlzT3BlbmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09wZW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgQ29uZmlybSBidXR0b24gaXMgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXNjb25maXJtYnV0dG9uZW5hYmxlZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IHRydWVcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXNDb25maXJtQnV0dG9uRW5hYmxlZCA9IHRydWU7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBDb25maXJtIGJ1dHRvbiBpcyB2aXNpYmxlIGZvciBzaW5nbGUgc2VsZWN0aW9uLlxuICAgKiBCeSBkZWZhdWx0IENvbmZpcm0gYnV0dG9uIGlzIHZpc2libGUgb25seSBmb3IgbXVsdGlwbGUgc2VsZWN0aW9uLlxuICAgKiAqKk5vdGUqKjogSXQgaXMgYWx3YXlzIHRydWUgZm9yIG11bHRpcGxlIHNlbGVjdGlvbiBhbmQgY2Fubm90IGJlIGNoYW5nZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc2NvbmZpcm1idXR0b24pLlxuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnaGFzQ29uZmlybUJ1dHRvbicpXG4gIGdldCBoYXNDb25maXJtQnV0dG9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oYXNDb25maXJtQnV0dG9uO1xuICB9XG4gIHNldCBoYXNDb25maXJtQnV0dG9uKGhhc0NvbmZpcm1CdXR0b246IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9oYXNDb25maXJtQnV0dG9uID0gISFoYXNDb25maXJtQnV0dG9uO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZW0gcHJvcGVydHkgdG8gdXNlIGFzIGEgdW5pcXVlIGlkZW50aWZpZXIsIGUuZywgYCdpZCdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtdmFsdWVmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgaXRlbVZhbHVlRmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIEl0ZW0gcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLCBgJ25hbWUnYC5cbiAgICogKipOb3RlKio6IGBpdGVtc2Agc2hvdWxkIGJlIGFuIG9iamVjdCBhcnJheS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbXRleHRmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGl0ZW1UZXh0RmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqXG4gICAqIEdyb3VwIHByb3BlcnR5IHRvIHVzZSBhcyBhIHVuaXF1ZSBpZGVudGlmaWVyIHRvIGdyb3VwIGl0ZW1zLCBlLmcuIGAnY291bnRyeS5pZCdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cHZhbHVlZmllbGQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdyb3VwVmFsdWVGaWVsZDogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogR3JvdXAgcHJvcGVydHkgdG8gZGlzcGxheSwgZS5nLiBgJ2NvdW50cnkubmFtZSdgLlxuICAgKiAqKk5vdGUqKjogYGl0ZW1zYCBzaG91bGQgYmUgYW4gb2JqZWN0IGFycmF5LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNncm91cHRleHRmaWVsZCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IG51bGxcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZ3JvdXBUZXh0RmllbGQ6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBzaG93IFNlYXJjaGJhci5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2Fuc2VhcmNoKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2FuU2VhcmNoID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciBgb25TZWFyY2hgIGV2ZW50IGlzIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2lzb25zZWFyY2hlbmFibGVkKS5cbiAgICpcbiAgICogQGRlZmF1bHQgdHJ1ZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoJ2lzT25TZWFyY2hFbmFibGVkJylcbiAgZ2V0IGlzT25TZWFyY2hFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZDtcbiAgfVxuICBzZXQgaXNPblNlYXJjaEVuYWJsZWQoaXNPblNlYXJjaEVuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc09uU2VhcmNoRW5hYmxlZCA9ICEhaXNPblNlYXJjaEVuYWJsZWQ7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNob3cgQ2xlYXIgYnV0dG9uLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5jbGVhcikuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW9uaWMtc2VsZWN0YWJsZS1jYW4tY2xlYXInKVxuICBASW5wdXQoJ2NhbkNsZWFyJylcbiAgZ2V0IGNhbkNsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5DbGVhcjtcbiAgfVxuICBzZXQgY2FuQ2xlYXIoY2FuQ2xlYXI6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5DbGVhciA9ICEhY2FuQ2xlYXI7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdG8gc2hvdyBzZWxlY3QgYWxsIGJ1dHRvbi5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlvbmljLXNlbGVjdGFibGUtY2FuLXNlbGVjdGFsbCcpXG4gICAgQElucHV0KCdjYW5TZWxlY3RBbGwnKVxuICAgIGdldCBjYW5TZWxlY3RBbGwoKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FuU2VsZWN0QWxsO1xuICAgIH1cbiAgICBzZXQgY2FuU2VsZWN0QWxsKGNhblNlbGVjdEFsbDogYm9vbGVhbikge1xuICAgICAgdGhpcy5fY2FuU2VsZWN0QWxsID0gISFjYW5TZWxlY3RBbGw7XG4gICAgICB0aGlzLl9jb3VudEZvb3RlckJ1dHRvbnMoKTtcbiAgICB9XG4gICAgQElucHV0KClcbiAgICBzZWxlY3RBbGxUZXh0ID0gJ1NlbGVjdCBBbGwnO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgSW9uaWMgW0luZmluaXRlU2Nyb2xsXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL2luZmluaXRlLXNjcm9sbC9JbmZpbml0ZVNjcm9sbC8pIGlzIGVuYWJsZWQuXG4gICAqICoqTm90ZSoqOiBJbmZpbml0ZSBzY3JvbGwgY2Fubm90IGJlIHVzZWQgdG9nZXRoZXIgd2l0aCB2aXJ0dWFsIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoYXNJbmZpbml0ZVNjcm9sbCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgSW9uaWMgW1ZpcnR1YWxTY3JvbGxdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pIGlzIGVuYWJsZWQuXG4gICAqICoqTm90ZSoqOiBWaXJ0dWFsIHNjcm9sbCBjYW5ub3QgYmUgdXNlZCB0b2dldGhlciB3aXRoIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaGFzdmlydHVhbHNjcm9sbCkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGhhc1ZpcnR1YWxTY3JvbGwgPSBmYWxzZTtcblxuICAvKipcbiAgICogU2VlIElvbmljIFZpcnR1YWxTY3JvbGwgW2FwcHJveEl0ZW1IZWlnaHRdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2NvbXBvbmVudHMvdmlydHVhbC1zY3JvbGwvVmlydHVhbFNjcm9sbC8pLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiN2aXJ0dWFsc2Nyb2xsYXBwcm94aXRlbWhlaWdodCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICc0MHB4J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICB2aXJ0dWFsU2Nyb2xsQXBwcm94SXRlbUhlaWdodCA9ICc0MHB4JztcblxuICAvKipcbiAgICogQSBwbGFjZWhvbGRlciBmb3IgU2VhcmNoYmFyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2hwbGFjZWhvbGRlcikuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdTZWFyY2gnXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaFBsYWNlaG9sZGVyID0gJ1NlYXJjaCc7XG5cbiAgLyoqXG4gICAqIEEgcGxhY2Vob2xkZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3BsYWNlaG9sZGVyKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBwbGFjZWhvbGRlcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogdmFsdWVNb2RlXG4gICAqIElucHV0IGFuZCBSZXR1cm4gdmFsdWVzIG5vdCBvYmplY3RzLiBJZiBtdWx0aXBsZSB0aGVuIGFycmF5IG9mIHZhbHVlcyBvZiB0aGUgaXRlbVZhbHVlRmllbGQgcHJvcGVydHkuXG4gICAqIChNb3JlIGxpa2UgYSBpb24tc2VsZWN0IGNvbXBvbmVudClcbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgIEBJbnB1dCgpXG4gICB2YWx1ZU1vZGU6IGJvb2xlYW4gPSBmYWxzZTsgIFxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgbXVsdGlwbGUgaXRlbXMgY2FuIGJlIHNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpc211bHRpcGxlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgZmFsc2VcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCdpc011bHRpcGxlJylcbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTXVsdGlwbGU7XG4gIH1cbiAgc2V0IGlzTXVsdGlwbGUoaXNNdWx0aXBsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzTXVsdGlwbGUgPSAhIWlzTXVsdGlwbGU7XG4gICAgdGhpcy5fY291bnRGb290ZXJCdXR0b25zKCk7XG4gIH1cblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gbm8gaXRlbXMgaGF2ZSBiZWVuIGZvdW5kIGR1cmluZyBzZWFyY2guXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGZhaWx0ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ05vIGl0ZW1zIGZvdW5kLidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgc2VhcmNoRmFpbFRleHQgPSAnTm8gaXRlbXMgZm91bmQuJztcblxuICAvKipcbiAgICogQ2xlYXIgYnV0dG9uIHRleHQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdDbGVhcidcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xlYXJCdXR0b25UZXh0ID0gJ0NsZWFyJztcblxuICAvKipcbiAgICogQWRkIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRidXR0b250ZXh0KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ0FkZCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgYWRkQnV0dG9uVGV4dCA9ICdBZGQnO1xuXG4gIC8qKlxuICAgKiBDb25maXJtIGJ1dHRvbiB0ZXh0LlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjb25maXJtYnV0dG9udGV4dCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdPSydcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY29uZmlybUJ1dHRvblRleHQgPSAnT0snO1xuXG4gIC8qKlxuICAgKiBDbG9zZSBidXR0b24gdGV4dC5cbiAgICogVGhlIGZpZWxkIGlzIG9ubHkgYXBwbGljYWJsZSB0byAqKmlPUyoqIHBsYXRmb3JtLCBvbiAqKkFuZHJvaWQqKiBvbmx5IENyb3NzIGljb24gaXMgZGlzcGxheWVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjbG9zZWJ1dHRvbnRleHQpLlxuICAgKlxuICAgKiBAZGVmYXVsdCAnQ2FuY2VsJ1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBjbG9zZUJ1dHRvblRleHQgPSAnQ2FuY2VsJztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIFNlYXJjaGJhciBzaG91bGQgcmVjZWl2ZSBmb2N1cyB3aGVuIE1vZGFsIGlzIG9wZW5lZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvdWxkZm9jdXNzZWFyY2hiYXIpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBzaG91bGRGb2N1c1NlYXJjaGJhciA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBIZWFkZXIgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hlYWRlcmNvbG9yKS5cbiAgICpcbiAgICogQGRlZmF1bHQgbnVsbFxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBoZWFkZXJDb2xvcjogc3RyaW5nID0gbnVsbDtcblxuICAvKipcbiAgICogR3JvdXAgY29sb3IuIFtJb25pYyBjb2xvcnNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvdGhlbWluZy9hZHZhbmNlZCNjb2xvcnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2dyb3VwY29sb3IpLlxuICAgKlxuICAgKiBAZGVmYXVsdCBudWxsXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGdyb3VwQ29sb3I6IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqXG4gICAqIENsb3NlIGJ1dHRvbiBzbG90LiBbSW9uaWMgc2xvdHNdKGh0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvYXBpL2J1dHRvbnMpIGFyZSBzdXBwb3J0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2Nsb3NlYnV0dG9uc2xvdCkuXG4gICAqXG4gICAqIEBkZWZhdWx0ICdzdGFydCdcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgY2xvc2VCdXR0b25TbG90ID0gJ3N0YXJ0JztcblxuICAvKipcbiAgICogSXRlbSBpY29uIHNsb3QuIFtJb25pYyBzbG90c10oaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9hcGkvaXRlbSkgYXJlIHN1cHBvcnRlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jaXRlbWljb25zbG90KS5cbiAgICpcbiAgICogQGRlZmF1bHQgJ3N0YXJ0J1xuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKVxuICBpdGVtSWNvblNsb3QgPSAnc3RhcnQnO1xuXG4gIC8qKlxuICAgKiBGaXJlcyB3aGVuIGl0ZW0vcyBoYXMgYmVlbiBzZWxlY3RlZCBhbmQgTW9kYWwgY2xvc2VkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmNoYW5nZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQ7IHZhbHVlOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaXMgdHlwaW5nIGluIFNlYXJjaGJhci5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGFuZCBgaXNPblNlYXJjaEVuYWJsZWRgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQ7IHRleHQ6IHN0cmluZyB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBubyBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoZmFpbCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaEZhaWw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50OyB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gc29tZSBpdGVtcyBoYXZlIGJlZW4gZm91bmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uc2VhcmNoc3VjY2VzcykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlYXJjaFN1Y2Nlc3M6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50OyB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gdGhlIHVzZXIgaGFzIHNjcm9sbGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAqICoqTm90ZSoqOiBgaGFzSW5maW5pdGVTY3JvbGxgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbmluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uSW5maW5pdGVTY3JvbGw6IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50OyB0ZXh0OiBzdHJpbmcgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbm9wZW4pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25PcGVuOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudCB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uY2xvc2UpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBAT3V0cHV0KClcbiAgb25DbG9zZTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gYW4gaXRlbSBoYXMgYmVlbiBzZWxlY3RlZCBvciB1bnNlbGVjdGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNlbGVjdCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvblNlbGVjdDogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQ7IGl0ZW06IGFueTsgaXNTZWxlY3RlZDogYm9vbGVhbiB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBDbGVhciBidXR0b24gaGFzIGJlZW4gY2xpY2tlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25jbGVhcikuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkNsZWFyOiBFdmVudEVtaXR0ZXI8eyBjb21wb25lbnQ6IElvbmljU2VsZWN0YWJsZUNvbXBvbmVudDsgaXRlbXM6IGFueVtdIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgaXRlbXMgdGhhdCBhcmUgc2VsZWN0ZWQgYW5kIGF3YWl0aW5nIGNvbmZpcm1hdGlvbiBieSB1c2VyLCB3aGVuIGhlIGhhcyBjbGlja2VkIENvbmZpcm0gYnV0dG9uLlxuICAgKiBBZnRlciB0aGUgdXNlciBoYXMgY2xpY2tlZCBDb25maXJtIGJ1dHRvbiBpdGVtcyB0byBjb25maXJtIGFyZSBjbGVhcmVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNpdGVtc3RvY29uZmlybSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IFtdXG4gICAqIEByZWFkb25seVxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBnZXQgaXRlbXNUb0NvbmZpcm0oKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1RvQ29uZmlybTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIb3cgbG9uZywgaW4gbWlsbGlzZWNvbmRzLCB0byB3YWl0IHRvIGZpbHRlciBpdGVtcyBvciB0byB0cmlnZ2VyIGBvblNlYXJjaGAgZXZlbnQgYWZ0ZXIgZWFjaCBrZXlzdHJva2UuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3NlYXJjaGRlYm91bmNlKS5cbiAgICpcbiAgICogQGRlZmF1bHQgMjUwXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNlYXJjaERlYm91bmNlOiBOdW1iZXIgPSAyNTA7XG5cbiAgLyoqXG4gICAqIEEgbGlzdCBvZiBpdGVtcyB0byBkaXNhYmxlLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlZGl0ZW1zKS5cbiAgICpcbiAgICogQGRlZmF1bHQgW11cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgZGlzYWJsZWRJdGVtczogYW55W10gPSBbXTtcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIGl0ZW0gdmFsdWUgb25seSBzaG91bGQgYmUgc3RvcmVkIGluIGBuZ01vZGVsYCwgbm90IHRoZSBlbnRpcmUgaXRlbS5cbiAgICogKipOb3RlKio6IEl0ZW0gdmFsdWUgaXMgZGVmaW5lZCBieSBgaXRlbVZhbHVlRmllbGRgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzaG91bGRzdG9yZWl0ZW12YWx1ZSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNob3VsZFN0b3JlSXRlbVZhbHVlID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBlZGl0aW5nIGl0ZW1zLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNjYW5zYXZlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhblNhdmVJdGVtID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgd2hldGhlciB0byBhbGxvdyBkZWxldGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgpXG4gIGNhbkRlbGV0ZUl0ZW0gPSBmYWxzZTtcblxuICAvKipcbiAgICogb3ZlcnJpZGVzIGlvbi1sYWJlbCBhbmQgcHJlZmVycmVkIGZvciBpb25pYzdcbiAgICovXG4gIEBJbnB1dCgpXG4gIHRpdGxlOnN0cmluZztcblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIGFsbG93IGFkZGluZyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2FuYWRkaXRlbSkuXG4gICAqXG4gICAqIEBkZWZhdWx0IGZhbHNlXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBJbnB1dCgnY2FuQWRkSXRlbScpXG4gIGdldCBjYW5BZGRJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9jYW5BZGRJdGVtO1xuICB9XG4gIHNldCBjYW5BZGRJdGVtKGNhbkFkZEl0ZW06IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9jYW5BZGRJdGVtID0gISFjYW5BZGRJdGVtO1xuICAgIHRoaXMuX2NvdW50Rm9vdGVyQnV0dG9ucygpO1xuICB9XG5cbiAgQElucHV0KClcbiAgYXJpYUxhYmVsOnN0cmluZztcblxuICAvKipcbiAgICogRmlyZXMgd2hlbiBFZGl0IGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBlZGl0IGl0ZW0uXG4gICAqICoqTm90ZSoqOiBgY2FuU2F2ZUl0ZW1gIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvbnNhdmVpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uU2F2ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50OyBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gRGVsZXRlIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqICoqTm90ZSoqOiBgY2FuRGVsZXRlSXRlbWAgaGFzIHRvIGJlIGVuYWJsZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI29uZGVsZXRlaXRlbSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIEBPdXRwdXQoKVxuICBvbkRlbGV0ZUl0ZW06IEV2ZW50RW1pdHRlcjx7IGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50OyBpdGVtOiBhbnkgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqXG4gICAqIEZpcmVzIHdoZW4gQWRkIGl0ZW0gYnV0dG9uIGhhcyBiZWVuIGNsaWNrZWQuXG4gICAqIFdoZW4gdGhlIGJ1dHRvbiBoYXMgYmVlbiBjbGlja2VkIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgIHdpbGwgYmUgc2hvd24uIFVzZSB0aGUgdGVtcGxhdGUgdG8gY3JlYXRlIGEgZm9ybSB0byBhZGQgaXRlbS5cbiAgICogKipOb3RlKio6IGBjYW5BZGRJdGVtYCBoYXMgdG8gYmUgZW5hYmxlZC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jb25hZGRpdGVtKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQE91dHB1dCgpXG4gIG9uQWRkSXRlbTogRXZlbnRFbWl0dGVyPHsgY29tcG9uZW50OiBJb25pY1NlbGVjdGFibGVDb21wb25lbnQgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVWYWx1ZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHZhbHVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSXRlbVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVJdGVtRW5kVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgaXRlbUVuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZVRpdGxlVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgdGl0bGVUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVQbGFjZWhvbGRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIHBsYWNlaG9sZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlTWVzc2FnZVRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIG1lc3NhZ2VUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVHcm91cFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGdyb3VwVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlR3JvdXBFbmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBncm91cEVuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUNsb3NlQnV0dG9uVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgY2xvc2VCdXR0b25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVTZWFyY2hGYWlsVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgc2VhcmNoRmFpbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAQ29udGVudENoaWxkKElvbmljU2VsZWN0YWJsZUFkZEl0ZW1UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBhZGRJdGVtVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9hZGRJdGVtVGVtcGxhdGVGb290ZXJIZWlnaHQ6IHN0cmluZztcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBoZWFkZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQENvbnRlbnRDaGlsZChJb25pY1NlbGVjdGFibGVJdGVtSWNvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGl0ZW1JY29uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBDb250ZW50Q2hpbGQoSW9uaWNTZWxlY3RhYmxlSWNvblRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGljb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICAvKipcbiAgICogU2VlIElvbmljIFZpcnR1YWxTY3JvbGwgW2hlYWRlckZuXShodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2FwaS9jb21wb25lbnRzL3ZpcnR1YWwtc2Nyb2xsL1ZpcnR1YWxTY3JvbGwvKS5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdmlydHVhbHNjcm9sbGhlYWRlcmZuKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KClcbiAgdmlydHVhbFNjcm9sbEhlYWRlckZuID0gKCkgPT4gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9tb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm0sXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBpb25JdGVtOiBJb25JdGVtLFxuICAgIHByaXZhdGUgX2l0ZXJhYmxlRGlmZmVyczogSXRlcmFibGVEaWZmZXJzLFxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAoIXRoaXMuaXRlbXMgfHwgIXRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgfVxuXG4gICAgdGhpcy5faXRlbXNEaWZmZXIgPSB0aGlzLl9pdGVyYWJsZURpZmZlcnMuZmluZCh0aGlzLml0ZW1zKS5jcmVhdGUoKTtcbiAgfVxuXG4gIGluaXRGb2N1cygpIHsgfVxuXG4gIGVuYWJsZUlvbkl0ZW0oaXNFbmFibGVkOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmlvbkl0ZW0uZGlzYWJsZWQgPSAhaXNFbmFibGVkO1xuICB9XG5cbiAgX2lzTnVsbE9yV2hpdGVTcGFjZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbnZlcnQgdmFsdWUgdG8gc3RyaW5nIGluIGNhc2UgaWYgaXQncyBub3QuXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxzL2csICcnKS5sZW5ndGggPCAxO1xuICB9XG5cbiAgX3NldEhhc1NlYXJjaFRleHQoKSB7XG4gICAgdGhpcy5faGFzU2VhcmNoVGV4dCA9ICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fc2VhcmNoVGV4dCk7XG4gIH1cblxuICBfaGFzT25TZWFyY2goKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNPblNlYXJjaEVuYWJsZWQgJiYgdGhpcy5vblNlYXJjaC5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPblNhdmVJdGVtKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNhblNhdmVJdGVtICYmIHRoaXMub25TYXZlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkFkZEl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuQWRkSXRlbSAmJiB0aGlzLm9uQWRkSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9oYXNPbkRlbGV0ZUl0ZW0oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY2FuRGVsZXRlSXRlbSAmJiB0aGlzLm9uRGVsZXRlSXRlbS5vYnNlcnZlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIF9lbWl0VmFsdWVDaGFuZ2UoKSB7XG4gICAgbGV0IHY7XG4gICAgLy8gZXZlbiB0aG91Z2ggdXNpbmcgYXJyYXkgb2Ygb2JqZWN0cyBmb3IgbGlzdCwgd2UgaGF2ZSBvcHRpb24gdG8gcmV0dXJuIGp1c3QgbGlzdCBvZiB2YWx1ZXNcbiAgICAvLyBzaW1pbGFyIHRvIGFuIGlvbi1zZWxlY3RcbiAgICBpZiAodGhpcy5faGFzT2JqZWN0cyAmJiB0aGlzLnZhbHVlTW9kZSkge1xuICAgICAgICBpZiAodGhpcy5faXNNdWx0aXBsZSAmJiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdiA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBwIG9mIHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2LnB1c2godGhpcy5fZ2V0SXRlbVZhbHVlKHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHYgPSB0aGlzLl9nZXRJdGVtVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2ID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSh2KTtcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdmFsdWU6IHZcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0U2VhcmNoKCkge1xuICAgIGlmICghdGhpcy5jYW5TZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9uU2VhcmNoLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPblNlbGVjdChpdGVtOiBhbnksIGlzU2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgaXRlbSxcbiAgICAgIGlzU2VsZWN0ZWRcbiAgICB9KTtcbiAgfVxuXG4gIF9lbWl0T25DbGVhcihpdGVtczogYW55W10pIHtcbiAgICB0aGlzLm9uQ2xlYXIuZW1pdCh7XG4gICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICBpdGVtc1xuICAgIH0pO1xuICB9XG5cbiAgX2VtaXRPblNlYXJjaFN1Y2Nlc3NPckZhaWwoaXNTdWNjZXNzOiBib29sZWFuKSB7XG4gICAgY29uc3QgZXZlbnREYXRhID0ge1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH07XG5cbiAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICB0aGlzLm9uU2VhcmNoU3VjY2Vzcy5lbWl0KGV2ZW50RGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TZWFyY2hGYWlsLmVtaXQoZXZlbnREYXRhKTtcbiAgICB9XG4gIH1cblxuICBfZm9ybWF0SXRlbShpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLl9pc051bGxPcldoaXRlU3BhY2UoaXRlbSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLml0ZW1UZXh0RmllbGQgPyBpdGVtW3RoaXMuaXRlbVRleHRGaWVsZF0gOiBpdGVtLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZm9ybWF0VmFsdWVJdGVtKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG5cbiAgICAgIGNvbnN0IGNvbXBhcmVWYWx1ZSA9IHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyA/IGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF0gOiBpdGVtO1xuXG4gICAgICAvLyBHZXQgaXRlbSB0ZXh0IGZyb20gdGhlIGxpc3QgYXMgd2Ugc3RvcmUgaXQncyB2YWx1ZSBvbmx5LlxuICAgICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gdGhpcy5pdGVtcy5maW5kKF9pdGVtID0+IF9pdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdID09PSBjb21wYXJlVmFsdWUpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShzZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5fZm9ybWF0SXRlbShpdGVtKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0SXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFsdWVNb2RlICYmIGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF07XG4gIH1cblxuICBfZ2V0U3RvcmVkSXRlbVZhbHVlKGl0ZW06IGFueSk6IGFueSB7XG4gICAgaWYgKCF0aGlzLl9oYXNPYmplY3RzKSB7XG4gICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUgPyBpdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdIDogaXRlbTtcbiAgfVxuXG4gIF9vblNlYXJjaGJhckNsZWFyKCkge1xuICAgIC8vIElvbmljIFNlYXJjaGJhciBkb2Vzbid0IGNsZWFyIGJpbmQgd2l0aCBuZ01vZGVsIHZhbHVlLlxuICAgIC8vIERvIGl0IG91cnNlbHZlcy5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gIH1cblxuICBfZmlsdGVySXRlbXMoKSB7XG4gICAgdGhpcy5fc2V0SGFzU2VhcmNoVGV4dCgpO1xuXG4gICAgaWYgKHRoaXMuX2hhc09uU2VhcmNoKCkpIHtcbiAgICAgIC8vIERlbGVnYXRlIGZpbHRlcmluZyB0byB0aGUgZXZlbnQuXG4gICAgICB0aGlzLl9lbWl0U2VhcmNoKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgZmlsdGVyaW5nLlxuICAgICAgbGV0IGdyb3VwcyA9IFtdO1xuXG4gICAgICBpZiAoIXRoaXMuX3NlYXJjaFRleHQgfHwgIXRoaXMuX3NlYXJjaFRleHQudHJpbSgpKSB7XG4gICAgICAgIGdyb3VwcyA9IHRoaXMuX2dyb3VwcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlclRleHQgPSB0aGlzLl9zZWFyY2hUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIHRoaXMuX2dyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtcyA9IGdyb3VwLml0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1UZXh0ID0gKHRoaXMuaXRlbVRleHRGaWVsZCA/XG4gICAgICAgICAgICAgIGl0ZW1bdGhpcy5pdGVtVGV4dEZpZWxkXSA6IGl0ZW0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVtVGV4dC5pbmRleE9mKGZpbHRlclRleHQpICE9PSAtMTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdyb3Vwcy5wdXNoKHtcbiAgICAgICAgICAgICAgdmFsdWU6IGdyb3VwLnZhbHVlLFxuICAgICAgICAgICAgICB0ZXh0OiBncm91cC50ZXh0LFxuICAgICAgICAgICAgICBpdGVtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBObyBpdGVtcyBmb3VuZC5cbiAgICAgICAgaWYgKCFncm91cHMubGVuZ3RoKSB7XG4gICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5fZmlsdGVyZWRHcm91cHMgPSBncm91cHM7XG4gICAgICB0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zID0gIXRoaXMuX2FyZUdyb3Vwc0VtcHR5KGdyb3Vwcyk7XG4gICAgICB0aGlzLl9lbWl0T25TZWFyY2hTdWNjZXNzT3JGYWlsKHRoaXMuX2hhc0ZpbHRlcmVkSXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIF9pc0l0ZW1EaXNhYmxlZChpdGVtOiBhbnkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWRJdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkSXRlbXMuc29tZShfaXRlbSA9PiB0aGlzLl9nZXRJdGVtVmFsdWUoX2l0ZW0pID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICB9XG5cbiAgX2lzSXRlbVNlbGVjdGVkKGl0ZW06IGFueSkge1xuICAgIC8vIE5PVEUgLSBzZWxlY3RlZCBpdGVtcyBjYW4gYmUgb2JqZWN0cyBvciB2YWx1ZXMsIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBpdGVtIGxpc3QgY29uc2lzdHMgb2YgKG9iamVjdHMgb3IgdmFsdWVzKSBhbmQgd2hldGhlciBzaG91bGRTdG9yZUl0ZW1WYWx1ZSBhbmQgaXRlbVZhbHVlRmllbGQgaXMgc2V0LiBcblxuICAgIC8vIGNvbXBhcmlzb24gY2FuIG9ubHkgYmUgbWFkZSBhZ2FpbnN0IHNjYWxhcnMgc28gdGhpcyBmdW5jdGlvbiBoYXMgdG8gZ2V0IGFwcHJvcHJpYXRlIHNjYWxhcnMgdG8gY29tcGFyZS5cblxuICAgIC8vIHRoZSB2YWx1ZSB0byBjb21wYXJlIHRoZSBzZWxlY3RlZCBsaXN0IGl0ZW1zIGFnYWluc3QuIEdldHMgdGhlIGl0ZW1baXRlbVZhbHVlRmllbGRdIHZhbHVlICh1c3VhbGx5IGlkKSBpZiBpdGVtIGlzIGFuIG9iamVjdCBvciBqdXN0IHRoZSB2YWx1ZSBpZiBpdGVtIGlzIG5vdCBhbiBvYmplY3RcbiAgICBjb25zdCBpdGVtVmFsdWUgPSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9zZWxlY3RlZEl0ZW1zLmZpbmQoc2VsZWN0ZWRJdGVtID0+IGl0ZW1WYWx1ZSA9PT0gKHR5cGVvZiBzZWxlY3RlZEl0ZW0gPT09ICdvYmplY3QnID8gc2VsZWN0ZWRJdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdIDogc2VsZWN0ZWRJdGVtICkpICE9PSB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX2FkZFNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy5fc2hvdWxkU3RvcmVJdGVtVmFsdWUpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMucHVzaCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX2RlbGV0ZVNlbGVjdGVkSXRlbShpdGVtOiBhbnkpIHtcbiAgICBsZXQgaXRlbVRvRGVsZXRlSW5kZXg7XG4gICAgY29uc3QgaXRlbVZhbHVlID0gdGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW0pO1xuXG4gICAgdGhpcy5fc2VsZWN0ZWRJdGVtcy5mb3JFYWNoKChzZWxlY3RlZEl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW1WYWx1ZSA9PT0gKHR5cGVvZiBzZWxlY3RlZEl0ZW0gPT09ICdvYmplY3QnID8gc2VsZWN0ZWRJdGVtW3RoaXMuaXRlbVZhbHVlRmllbGRdIDogc2VsZWN0ZWRJdGVtICkpIHtcbiAgICAgICAgaXRlbVRvRGVsZXRlSW5kZXggPSBpdGVtSW5kZXg7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zLnNwbGljZShpdGVtVG9EZWxldGVJbmRleCwgMSk7XG4gIH1cblxuICBfY2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLmlzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2xhYmVsID0gdGhpcy5fZ2V0TGFiZWxUZXh0KCk7XG4gICAgdGhpcy5vcGVuKCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLm9uT3Blbi5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAvLyBvbmx5IHNlZW1zIHRvIGNhdGNoIGlmIGFscmVhZHkgb3BlbmVkIHdoaWNoIGNhbiBoYXBwZW4gb24gc2xvdyBuZXR3b3JrIGFuZCBzb21lb25lIGRvdWJsZSB0YXBzXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2NhdWdodCAnLGUpOyAvL3NqZCBcbiAgICB9KTtcbiAgfVxuXG4gIF9zYXZlSXRlbShldmVudDogRXZlbnQsIGl0ZW06IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IGl0ZW07XG5cbiAgICBpZiAodGhpcy5faGFzT25TYXZlSXRlbSgpKSB7XG4gICAgICB0aGlzLm9uU2F2ZUl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93QWRkSXRlbVRlbXBsYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2RlbGV0ZUl0ZW1DbGljayhldmVudDogRXZlbnQsIGl0ZW06IGFueSkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuX2l0ZW1Ub0FkZCA9IGl0ZW07XG5cbiAgICBpZiAodGhpcy5faGFzT25EZWxldGVJdGVtKCkpIHtcbiAgICAgIC8vIERlbGVnYXRlIGxvZ2ljIHRvIGV2ZW50LlxuICAgICAgdGhpcy5vbkRlbGV0ZUl0ZW0uZW1pdCh7XG4gICAgICAgIGNvbXBvbmVudDogdGhpcyxcbiAgICAgICAgaXRlbTogdGhpcy5faXRlbVRvQWRkXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWxldGVJdGVtKHRoaXMuX2l0ZW1Ub0FkZCk7XG4gICAgfVxuICB9XG5cbiAgX2FkZEl0ZW1DbGljaygpIHtcbiAgICBpZiAodGhpcy5faGFzT25BZGRJdGVtKCkpIHtcbiAgICAgIHRoaXMub25BZGRJdGVtLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNob3dBZGRJdGVtVGVtcGxhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfcG9zaXRpb25BZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgLy8gV2FpdCBmb3IgdGhlIHRlbXBsYXRlIHRvIHJlbmRlci5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGZvb3RlciA9IHRoaXMuX21vZGFsQ29tcG9uZW50Ll9lbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5pb25pYy1zZWxlY3RhYmxlLWFkZC1pdGVtLXRlbXBsYXRlIGlvbi1mb290ZXInKTtcblxuICAgICAgdGhpcy5fYWRkSXRlbVRlbXBsYXRlRm9vdGVySGVpZ2h0ID0gZm9vdGVyID8gYGNhbGMoMTAwJSAtICR7Zm9vdGVyLm9mZnNldEhlaWdodH1weClgIDogJzEwMCUnO1xuICAgIH0sIDEwMCk7XG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgdGhpcy5jbG9zZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlLmVtaXQoe1xuICAgICAgICBjb21wb25lbnQ6IHRoaXNcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKCF0aGlzLl9oYXNPblNlYXJjaCgpKSB7XG4gICAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gICAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdEFsbCgpIHtcblxuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pdGVtcykge1xuICAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICAgICB0aGlzLml0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgICB9KTtcbiAgICAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgICB9XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXM7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gICAgdGhpcy5fZW1pdE9uQ2xlYXIoc2VsZWN0ZWRJdGVtcyk7XG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuX2l0ZW1zVG9Db25maXJtID0gW107XG4gICAgICAgIHJldHVybjtcbiAgICB9ICAgIFxuICAgIHRoaXMuY2xvc2UoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMub25DbG9zZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF9nZXRNb3JlSXRlbXMoKSB7XG4gICAgdGhpcy5vbkluZmluaXRlU2Nyb2xsLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgdGV4dDogdGhpcy5fc2VhcmNoVGV4dFxuICAgIH0pO1xuICB9XG5cbiAgX3NldEl0ZW1zVG9Db25maXJtKGl0ZW1zOiBhbnlbXSkge1xuICAgIC8vIFJldHVybiBhIGNvcHkgb2Ygb3JpZ2luYWwgYXJyYXksIHNvIGl0IGNvdWxkbid0IGJlIGNoYW5nZWQgZnJvbSBvdXRzaWRlLlxuICAgIHRoaXMuX2l0ZW1zVG9Db25maXJtID0gW10uY29uY2F0KGl0ZW1zKTtcbiAgfVxuXG4gIF9kb1NlbGVjdChzZWxlY3RlZEl0ZW06IGFueSkge1xuICAgIHRoaXMudmFsdWUgPSBzZWxlY3RlZEl0ZW07XG4gICAgdGhpcy5fZW1pdFZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICBfc2VsZWN0KGl0ZW06IGFueSkge1xuICAgIGNvbnN0IGlzSXRlbVNlbGVjdGVkID0gdGhpcy5faXNJdGVtU2VsZWN0ZWQoaXRlbSk7XG5cbiAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICBpZiAoaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgdGhpcy5fZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcblxuICAgICAgLy8gRW1pdCBvblNlbGVjdCBldmVudCBhZnRlciBzZXR0aW5nIGl0ZW1zIHRvIGNvbmZpcm0gc28gdGhleSBjb3VsZCBiZSB1c2VkXG4gICAgICAvLyBpbnNpZGUgdGhlIGV2ZW50LlxuICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sICFpc0l0ZW1TZWxlY3RlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmhhc0NvbmZpcm1CdXR0b24gfHwgdGhpcy5mb290ZXJUZW1wbGF0ZSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBNb2RhbCBhbmQga2VlcCB0cmFjayBvbiBpdGVtcyB0byBjb25maXJtLlxuICAgICAgICAvLyBXaGVuIGZvb3RlciB0ZW1wbGF0ZSBpcyB1c2VkIGl0J3MgdXAgdG8gZGV2ZWxvcGVyIHRvIGNsb3NlIE1vZGFsLlxuICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG5cbiAgICAgICAgaWYgKGlzSXRlbVNlbGVjdGVkKSB7XG4gICAgICAgICAgdGhpcy5fZGVsZXRlU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2FkZFNlbGVjdGVkSXRlbShpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NldEl0ZW1zVG9Db25maXJtKHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuXG4gICAgICAgIC8vIEVtaXQgb25TZWxlY3QgZXZlbnQgYWZ0ZXIgc2V0dGluZyBpdGVtcyB0byBjb25maXJtIHNvIHRoZXkgY291bGQgYmUgdXNlZFxuICAgICAgICAvLyBpbnNpZGUgdGhlIGV2ZW50LlxuICAgICAgICB0aGlzLl9lbWl0T25TZWxlY3QoaXRlbSwgIWlzSXRlbVNlbGVjdGVkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghaXNJdGVtU2VsZWN0ZWQpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZEl0ZW1zID0gW107XG4gICAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuXG4gICAgICAgICAgLy8gRW1pdCBvblNlbGVjdCBiZWZvcmUgb25DaGFuZ2UuXG4gICAgICAgICAgdGhpcy5fZW1pdE9uU2VsZWN0KGl0ZW0sIHRydWUpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFN0b3JlSXRlbVZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9kb1NlbGVjdCh0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kb1NlbGVjdChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jb25maXJtKCkge1xuICAgIHRoaXMuY29uZmlybSgpO1xuICAgIHRoaXMuX2Nsb3NlKCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMYWJlbFRleHQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy50aXRsZSkgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgcmV0dXJuIHRoaXMuX2lvbkxhYmVsRWxlbWVudCA/IHRoaXMuX2lvbkxhYmVsRWxlbWVudC50ZXh0Q29udGVudCA6IG51bGw7XG4gIH1cblxuICBwcml2YXRlIF9hcmVHcm91cHNFbXB0eShncm91cHMpIHtcbiAgICByZXR1cm4gZ3JvdXBzLmxlbmd0aCA9PT0gMCB8fCBncm91cHMuZXZlcnkoZ3JvdXAgPT4gIWdyb3VwLml0ZW1zIHx8IGdyb3VwLml0ZW1zLmxlbmd0aCA9PT0gMCk7XG4gIH1cblxuICBwcml2YXRlIF9jb3VudEZvb3RlckJ1dHRvbnMoKSB7XG4gICAgbGV0IGZvb3RlckJ1dHRvbnNDb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5jYW5DbGVhcikge1xuICAgICAgZm9vdGVyQnV0dG9uc0NvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNNdWx0aXBsZSB8fCB0aGlzLl9oYXNDb25maXJtQnV0dG9uKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5jYW5BZGRJdGVtKSB7XG4gICAgICBmb290ZXJCdXR0b25zQ291bnQrKztcbiAgICB9XG5cbiAgICB0aGlzLl9mb290ZXJCdXR0b25zQ291bnQgPSBmb290ZXJCdXR0b25zQ291bnQ7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJdGVtcyhpdGVtczogYW55W10pIHtcbiAgICAvLyBJdCdzIGltcG9ydGFudCB0byBoYXZlIGFuIGVtcHR5IHN0YXJ0aW5nIGdyb3VwIHdpdGggZW1wdHkgaXRlbXMgKGdyb3Vwc1swXS5pdGVtcyksXG4gICAgLy8gYmVjYXVzZSB3ZSBiaW5kIHRvIGl0IHdoZW4gdXNpbmcgVmlydHVhbFNjcm9sbC5cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS9pc3N1ZXMvNzAuXG4gICAgbGV0IGdyb3VwczogYW55W10gPSBbe1xuICAgICAgaXRlbXM6IGl0ZW1zIHx8IFtdXG4gICAgfV07XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoKSB7XG4gICAgICBpZiAodGhpcy5faGFzR3JvdXBzKSB7XG4gICAgICAgIGdyb3VwcyA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX2dldFByb3BlcnR5VmFsdWUoaXRlbSwgdGhpcy5ncm91cFZhbHVlRmllbGQpO1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBncm91cHMuZmluZChfZ3JvdXAgPT4gX2dyb3VwLnZhbHVlID09PSBncm91cFZhbHVlKTtcblxuICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgZ3JvdXAuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JvdXBzLnB1c2goe1xuICAgICAgICAgICAgICB2YWx1ZTogZ3JvdXBWYWx1ZSxcbiAgICAgICAgICAgICAgdGV4dDogdGhpcy5fZ2V0UHJvcGVydHlWYWx1ZShpdGVtLCB0aGlzLmdyb3VwVGV4dEZpZWxkKSxcbiAgICAgICAgICAgICAgaXRlbXM6IFtpdGVtXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9ncm91cHMgPSBncm91cHM7XG4gICAgdGhpcy5fZmlsdGVyZWRHcm91cHMgPSB0aGlzLl9ncm91cHM7XG4gICAgdGhpcy5faGFzRmlsdGVyZWRJdGVtcyA9ICF0aGlzLl9hcmVHcm91cHNFbXB0eSh0aGlzLl9maWx0ZXJlZEdyb3Vwcyk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcm9wZXJ0eVZhbHVlKG9iamVjdDogYW55LCBwcm9wZXJ0eTogc3RyaW5nKTogYW55IHtcbiAgICBpZiAoIXByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHkuc3BsaXQoJy4nKS5yZWR1Y2UoKF9vYmplY3QsIF9wcm9wZXJ0eSkgPT4gX29iamVjdCA/IF9vYmplY3RbX3Byb3BlcnR5XSA6IG51bGwsIG9iamVjdCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRJb25JdGVtSGFzRm9jdXMoaGFzRm9jdXM6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW9uSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGZvY3VzIENTUyBjbGFzcyBmb3IgcHJvcGVyIHN0eWx5aW5nIG9mIGlvbi1pdGVtL2lvbi1sYWJlbC5cbiAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taGFzLWZvY3VzJywgaGFzRm9jdXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SW9uSXRlbUhhc1ZhbHVlKCkge1xuICAgIGlmICghdGhpcy5pb25JdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdmFsdWUgQ1NTIGNsYXNzIGZvciBwcm9wZXIgc3R5bHlpbmcgb2YgaW9uLWl0ZW0vaW9uLWxhYmVsLlxuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtdmFsdWUnLCB0aGlzLmhhc1ZhbHVlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0SGFzUGxhY2Vob2xkZXIoKSB7XG4gICAgdGhpcy5faGFzUGxhY2Vob2xkZXIgPSAhdGhpcy5oYXNWYWx1ZSgpICYmXG4gICAgICAoIXRoaXMuX2lzTnVsbE9yV2hpdGVTcGFjZSh0aGlzLnBsYWNlaG9sZGVyKSB8fCB0aGlzLnBsYWNlaG9sZGVyVGVtcGxhdGUpID9cbiAgICAgIHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvcGFnYXRlT25DaGFuZ2UgPSAoXzogYW55KSA9PiB7IH07XG4gIHByaXZhdGUgcHJvcGFnYXRlT25Ub3VjaGVkID0gKCkgPT4geyB9O1xuXG4gIHByaXZhdGUgX3NldElvbkl0ZW1Dc3NDbGFzcyhjc3NDbGFzczogc3RyaW5nLCBzaG91bGRBZGQ6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuX2lvbkl0ZW1FbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hhbmdlIHRvIFJlbmRlcmVyMlxuICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2lvbkl0ZW1FbGVtZW50LCBjc3NDbGFzcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKGlzVmlzaWJsZTogYm9vbGVhbikge1xuICAgIC8vIEl0IHNob3VsZCBiZSBwb3NzaWJsZSB0byBzaG93L2hpZGUgdGhlIHRlbXBsYXRlIHJlZ2FyZGxlc3NcbiAgICAvLyBjYW5BZGRJdGVtIG9yIGNhblNhdmVJdGVtIHBhcmFtZXRlcnMsIHNvIHdlIGNvdWxkIGltcGxlbWVudCBzb21lXG4gICAgLy8gY3VzdG9tIGJlaGF2aW9yLiBFLmcuIGFkZGluZyBpdGVtIHdoZW4gc2VhcmNoIGZhaWxzIHVzaW5nIG9uU2VhcmNoRmFpbCBldmVudC5cbiAgICBpZiAoIXRoaXMuYWRkSXRlbVRlbXBsYXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVG8gbWFrZSBTYXZlSXRlbVRlbXBsYXRlIHZpc2libGUgd2UganVzdCBwb3NpdGlvbiBpdCBvdmVyIGxpc3QgdXNpbmcgQ1NTLlxuICAgIC8vIFdlIGRvbid0IGhpZGUgbGlzdCB3aXRoICpuZ0lmIG9yIFtoaWRkZW5dIHRvIHByZXZlbnQgaXRzIHNjcm9sbCBwb3NpdGlvbi5cbiAgICB0aGlzLl9pc0FkZEl0ZW1UZW1wbGF0ZVZpc2libGUgPSBpc1Zpc2libGU7XG4gICAgdGhpcy5faXNGb290ZXJWaXNpYmxlID0gIWlzVmlzaWJsZTtcbiAgfVxuXG5cbiAgICBwcml2YXRlIHN0YXJ0c1dpdGggPSAoaW5wdXQ6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnN1YnN0cigwLCBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICAgIH07XG5cbiAgICBwcml2YXRlIGdldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjbGFzc0xpc3QuaXRlbShpKTtcbiAgICAgICAgICAgIGlmIChpdGVtICE9PSBudWxsICYmIHRoaXMuc3RhcnRzV2l0aChpdGVtLCAnbmctJykpIHtcbiAgICAgICAgICAgICAgICBjbGFzc2VzLnB1c2goYGlvbi0ke2l0ZW0uc3Vic3RyKDMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgIH07XG5cbiAgICBwcml2YXRlIHNldENsYXNzZXMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzZXM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NMaXN0O1xuICAgICAgICBbXG4gICAgICAgICAgICAnaW9uLXZhbGlkJyxcbiAgICAgICAgICAgICdpb24taW52YWxpZCcsXG4gICAgICAgICAgICAnaW9uLXRvdWNoZWQnLFxuICAgICAgICAgICAgJ2lvbi11bnRvdWNoZWQnLFxuICAgICAgICAgICAgJ2lvbi1kaXJ0eScsXG4gICAgICAgICAgICAnaW9uLXByaXN0aW5lJyxcbiAgICAgICAgXS5mb3JFYWNoKChjKSA9PiBjbGFzc0xpc3QucmVtb3ZlKGMpKTtcblxuICAgICAgICBjbGFzc2VzLmZvckVhY2goKGMpID0+IGNsYXNzTGlzdC5hZGQoYykpO1xuICAgIH07XG4gICAgXG4gICAgcmFmID0gKGg6IGFueSkgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIF9fem9uZV9zeW1ib2xfX3JlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZShoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChoKTtcbiAgICB9O1xuXG5cbiAgICBwcml2YXRlIHNldElvbmljQ2xhc3NlcyA9IChlbGVtZW50OiBFbGVtZW50UmVmKSA9PiB7XG4gICAgICAgIHRoaXMucmFmKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHRoaXMuZ2V0Q2xhc3NlcyhpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLnNldENsYXNzZXMoaW5wdXQsIGNsYXNzZXMpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnaW9uLWl0ZW0nKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDbGFzc2VzKGl0ZW0sIGNsYXNzZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBzZXRJdGVtQ2xhc3MgPSAoXG4gICAgICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgICAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICAgICAgICBhZGRDbGFzczogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBpdGVtLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGlmIChhZGRDbGFzcykge1xuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG4gIG9uQnV0dG9uRm9jdXMoKSB7XG4gICAgdGhpcy5fc2V0SW9uSXRlbUNzc0NsYXNzKCdpdGVtLWhhcy1mb2N1cycsIHRydWUpO1xuICB9XG5cbiAgb25CdXR0b25CbHVyKCkge1xuICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1oYXMtZm9jdXMnLCBmYWxzZSk7XG4gIH1cblxuICAvKiBDb250cm9sVmFsdWVBY2Nlc3NvciAqL1xuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAvLyBhbGxvdyBiZWluZyBwYXNzZWQgYSBzdHJpbmcgb3IgbnVtYmVyIGlmIHVzaW5nIGl0ZW1WYWx1ZSBmaWVsZCBhbmQgZmluZCB0aGF0IHZhbHVlIGluIHRoZSBpdGVtIGxpc3RcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlICE9ICdvYmplY3QnICYmIHRoaXMuX2hhc09iamVjdHMpIHtcbiAgICAgICAgbGV0IHYgPSB0aGlzLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gdmFsdWUgPT09IGl0ZW1bdGhpcy5pdGVtVmFsdWVGaWVsZF0pO1xuICAgICAgICBpZiAodikgdmFsdWUgPSB2WzBdO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKG1ldGhvZDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5wcm9wYWdhdGVPbkNoYW5nZSA9IG1ldGhvZDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKG1ldGhvZDogKCkgPT4gdm9pZCkge1xuICAgIHRoaXMucHJvcGFnYXRlT25Ub3VjaGVkID0gbWV0aG9kO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc0VuYWJsZWQgPSAhaXNEaXNhYmxlZDtcbiAgfVxuICAvKiAuQ29udHJvbFZhbHVlQWNjZXNzb3IgKi9cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLl9pc0lvcyA9IHRoaXMuX3BsYXRmb3JtLmlzKCdpb3MnKTtcbiAgICB0aGlzLl9pc01EID0gIXRoaXMuX2lzSW9zO1xuICAgIHRoaXMuX2hhc09iamVjdHMgPSAhdGhpcy5faXNOdWxsT3JXaGl0ZVNwYWNlKHRoaXMuaXRlbVZhbHVlRmllbGQpO1xuICAgIC8vIEdyb3VwaW5nIGlzIHN1cHBvcnRlZCBmb3Igb2JqZWN0cyBvbmx5LlxuICAgIC8vIElvbmljIFZpcnR1YWxTY3JvbGwgaGFzIGl0J3Mgb3duIGltcGxlbWVudGF0aW9uIG9mIGdyb3VwaW5nLlxuICAgIHRoaXMuX2hhc0dyb3VwcyA9IEJvb2xlYW4odGhpcy5faGFzT2JqZWN0cyAmJiB0aGlzLmdyb3VwVmFsdWVGaWVsZCAmJiAhdGhpcy5oYXNWaXJ0dWFsU2Nyb2xsKTtcblxuICAgIGlmICh0aGlzLmlvbkl0ZW0pIHtcbiAgICAgIHRoaXMuX2lvbkl0ZW1FbGVtZW50ID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2lvbi1pdGVtJyk7XG4gICAgICB0aGlzLl9zZXRJb25JdGVtQ3NzQ2xhc3MoJ2l0ZW0taW50ZXJhY3RpdmUnLCB0cnVlKTtcbiAgICAgIHRoaXMuX3NldElvbkl0ZW1Dc3NDbGFzcygnaXRlbS1pb25pYy1zZWxlY3RhYmxlJywgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLl9pb25JdGVtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pb25MYWJlbEVsZW1lbnQgPSB0aGlzLl9pb25JdGVtRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKTtcblxuICAgICAgICBpZiAodGhpcy5faW9uTGFiZWxFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5faGFzSW9uTGFiZWwgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2lvbkxhYmVsUG9zaXRpb24gPSB0aGlzLl9pb25MYWJlbEVsZW1lbnQuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpIHx8ICdkZWZhdWx0JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW5hYmxlSW9uSXRlbSh0aGlzLmlzRW5hYmxlZCk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKSB7XG4gICAgY29uc3QgaXRlbXNDaGFuZ2VzID0gdGhpcy5faXRlbXNEaWZmZXIuZGlmZih0aGlzLml0ZW1zKTtcblxuICAgIGlmIChpdGVtc0NoYW5nZXMpIHtcbiAgICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWU7XG5cbiAgICAgIHRoaXMub25JdGVtc0NoYW5nZS5lbWl0KHtcbiAgICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBpdGVtLlxuICAgKiAqKk5vdGUqKjogSWYgeW91IHdhbnQgYW4gaXRlbSB0byBiZSBhZGRlZCB0byB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNhZGRpdGVtKS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0byBhZGQuXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGl0ZW0gaGFzIGJlZW4gYWRkZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGFkZEl0ZW0oaXRlbTogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIC8vIEFkZGluZyBpdGVtIHRyaWdnZXJzIG9uSXRlbXNDaGFuZ2UuXG4gICAgLy8gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gb25JdGVtc0NoYW5nZSBmaW5pc2hlcy5cbiAgICAvLyBXZSBuZWVkIGEgcHJvbWlzZSBvciB1c2VyIGNvdWxkIGRvIHNvbWV0aGluZyBhZnRlciBpdGVtIGhhcyBiZWVuIGFkZGVkLFxuICAgIC8vIGUuZy4gdXNlIHNlYXJjaCgpIG1ldGhvZCB0byBmaW5kIHRoZSBhZGRlZCBpdGVtLlxuICAgIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcblxuICAgIC8vIENsb3NlIGFueSBydW5uaW5nIHN1YnNjcmlwdGlvbi5cbiAgICBpZiAodGhpcy5fYWRkSXRlbU9ic2VydmFibGUpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2FkZEl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2VsZi5fYWRkSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGl0ZW0uXG4gICAqICoqTm90ZSoqOiBJZiB5b3Ugd2FudCBhbiBpdGVtIHRvIGJlIGRlbGV0ZWQgZnJvbSB0aGUgb3JpZ2luYWwgYXJyYXkgYXMgd2VsbCB1c2UgdHdvLXdheSBkYXRhIGJpbmRpbmcgc3ludGF4IG9uIGBbKGl0ZW1zKV1gIGZpZWxkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkZWxldGVpdGVtKS5cbiAgICpcbiAgICogQHBhcmFtIGl0ZW0gSXRlbSB0byBkZWxldGUuXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGl0ZW0gaGFzIGJlZW4gZGVsZXRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZGVsZXRlSXRlbShpdGVtOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBoYXNWYWx1ZUNoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSBzZWxlY3RlZCBpdGVtcy5cbiAgICBpZiAodGhpcy5fc2VsZWN0ZWRJdGVtcykge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRJdGVtcyA9IHRoaXMuX3NlbGVjdGVkSXRlbXMuZmlsdGVyKF9pdGVtID0+IHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtKSAhPT0gdGhpcy5fZ2V0U3RvcmVkSXRlbVZhbHVlKF9pdGVtKSk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIGRlbGV0ZWQgaXRlbSBmcm9tIHZhbHVlLlxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWUuZmlsdGVyKHZhbHVlID0+IHZhbHVlLmlkICE9PSBpdGVtLmlkKTtcblxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCAhPT0gdGhpcy52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWVzO1xuICAgICAgICAgIGhhc1ZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChpdGVtID09PSB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgICAgaGFzVmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWx1ZUNoYW5nZWQpIHtcbiAgICAgIHRoaXMuX2VtaXRWYWx1ZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIC8vIFJlbW92ZSBkZWxldGVkIGl0ZW0gZnJvbSBsaXN0LlxuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoX2l0ZW0gPT4gX2l0ZW0uaWQgIT09IGl0ZW0uaWQpO1xuXG4gICAgLy8gUmVmcmVzaCBpdGVtcyBvbiBwYXJlbnQgY29tcG9uZW50LlxuICAgIHRoaXMuaXRlbXNDaGFuZ2UuZW1pdChpdGVtcyk7XG5cbiAgICAvLyBSZWZyZXNoIGxpc3QuXG4gICAgdGhpcy5fc2V0SXRlbXMoaXRlbXMpO1xuXG4gICAgdGhpcy5vbkl0ZW1zQ2hhbmdlLmVtaXQoe1xuICAgICAgY29tcG9uZW50OiB0aGlzXG4gICAgfSk7XG5cbiAgICAvLyBDbG9zZSBhbnkgcnVubmluZyBzdWJzY3JpcHRpb24uXG4gICAgaWYgKHRoaXMuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlKSB7XG4gICAgICB0aGlzLl9kZWxldGVJdGVtT2JzZXJ2YWJsZS51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIC8vIENvbXBsZXRlIGNhbGxiYWNrIGlzbid0IGZpcmVkIGZvciBzb21lIHJlYXNvbixcbiAgICAgIC8vIHNvIHVuc3Vic2NyaWJlIGluIGJvdGggc3VjY2VzcyBhbmQgZmFpbCBjYXNlcy5cbiAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlID0gc2VsZi5vbkl0ZW1zQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHNlbGYuX2RlbGV0ZUl0ZW1PYnNlcnZhYmxlLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgc2VsZi5fZGVsZXRlSXRlbU9ic2VydmFibGUudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgcmVqZWN0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW55IGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2hhc3ZhbHVlKS5cbiAgICpcbiAgICogQHJldHVybnMgQSBib29sZWFuIGRldGVybWluaW5nIHdoZXRoZXIgYW55IGl0ZW0gaGFzIGJlZW4gc2VsZWN0ZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl92YWx1ZUl0ZW1zLmxlbmd0aCAhPT0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlSXRlbXMubGVuZ3RoICE9PSAwICYmICF0aGlzLl9pc051bGxPcldoaXRlU3BhY2UodGhpcy5fdmFsdWVJdGVtc1swXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIE1vZGFsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNvcGVuKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gTW9kYWwgaGFzIGJlZW4gb3BlbmVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBvcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgLy8gcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBvcGVuZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fZmlsdGVySXRlbXMoKTtcbiAgICAgIHNlbGYuX2lzT3BlbmVkID0gdHJ1ZTtcblxuICAgICAgY29uc3QgbW9kYWxPcHRpb25zOiBNb2RhbE9wdGlvbnMgPSB7XG4gICAgICAgIGNvbXBvbmVudDogSW9uaWNTZWxlY3RhYmxlTW9kYWxDb21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudFByb3BzOiB7IHNlbGVjdENvbXBvbmVudDogc2VsZiB9LFxuICAgICAgICBiYWNrZHJvcERpc21pc3M6IHNlbGYuX3Nob3VsZEJhY2tkcm9wQ2xvc2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLm1vZGFsQ3NzQ2xhc3MpIHtcbiAgICAgICAgbW9kYWxPcHRpb25zLmNzc0NsYXNzID0gc2VsZi5tb2RhbENzc0NsYXNzO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZi5tb2RhbEVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIG1vZGFsT3B0aW9ucy5lbnRlckFuaW1hdGlvbiA9IHNlbGYubW9kYWxFbnRlckFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHNlbGYubW9kYWxMZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICBtb2RhbE9wdGlvbnMubGVhdmVBbmltYXRpb24gPSBzZWxmLm1vZGFsTGVhdmVBbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29udHJvbGxlci5jcmVhdGUobW9kYWxPcHRpb25zKS50aGVuKG1vZGFsID0+IHtcbiAgICAgICAgc2VsZi5fbW9kYWwgPSBtb2RhbDtcbiAgICAgICAgbW9kYWwucHJlc2VudCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIC8vIFNldCBmb2N1cyBhZnRlciBNb2RhbCBoYXMgb3BlbmVkIHRvIGF2b2lkIGZsaWNrZXJpbmcgb2YgZm9jdXMgaGlnaGxpZ2h0aW5nXG4gICAgICAgICAgLy8gYmVmb3JlIE1vZGFsIG9wZW5pbmcuXG4gICAgICAgICAgc2VsZi5fc2V0SW9uSXRlbUhhc0ZvY3VzKHRydWUpO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbW9kYWwub25XaWxsRGlzbWlzcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1vZGFsLm9uRGlkRGlzbWlzcygpLnRoZW4oZXZlbnQgPT4ge1xuICAgICAgICAgIHNlbGYuX2lzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5faXRlbXNUb0NvbmZpcm0gPSBbXTtcblxuICAgICAgICAgIC8vIENsb3NlZCBieSBjbGlja2luZyBvbiBiYWNrZHJvcCBvdXRzaWRlIG1vZGFsLlxuICAgICAgICAgIGlmIChldmVudC5yb2xlID09PSAnYmFja2Ryb3AnKSB7XG4gICAgICAgICAgICBzZWxmLm9uQ2xvc2UuZW1pdCh7XG4gICAgICAgICAgICAgIGNvbXBvbmVudDogc2VsZlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyBNb2RhbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jY2xvc2UpLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgaWYgKCFzZWxmLl9pc0VuYWJsZWQgfHwgIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIC8vcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgaXMgZGlzYWJsZWQgb3IgYWxyZWFkeSBjbG9zZWQuJyk7IC8vc2pkIHJlbW92ZWQgbm90IHVzZWZ1bC5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnByb3BhZ2F0ZU9uVG91Y2hlZCgpO1xuICAgICAgc2VsZi5faXNPcGVuZWQgPSBmYWxzZTtcbiAgICAgIHNlbGYuX2l0ZW1Ub0FkZCA9IG51bGw7XG4gICAgICBzZWxmLl9tb2RhbC5kaXNtaXNzKCkudGhlbigoKSA9PiB7XG4gICAgICAgLy8gc2pkIHNlbGYuX3NldElvbkl0ZW1IYXNGb2N1cyhmYWxzZSk7XG4gICAgICAgIHNlbGYuaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NsZWFyKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNNdWx0aXBsZSA/IFtdIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtc1RvQ29uZmlybSA9IFtdO1xuICAgIHRoaXMucHJvcGFnYXRlT25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlybXMgc2VsZWN0ZWQgaXRlbXMgYnkgdXBkYXRpbmcgdmFsdWUuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2NvbmZpcm0pLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBjb25maXJtKCkge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5oYXNDb25maXJtQnV0dG9uIHx8IHRoaXMuZm9vdGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2RvU2VsZWN0KHRoaXMuX3NlbGVjdGVkSXRlbXNbMF0gfHwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgb3IgZGVzZWxlY3RzIGFsbCBvciBzcGVjaWZpYyBpdGVtcy5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jdG9nZ2xlaXRlbXMpLlxuICAgKlxuICAgKiBAcGFyYW0gaXNTZWxlY3QgRGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHNlbGVjdCBvciBkZXNlbGVjdCBpdGVtcy5cbiAgICogQHBhcmFtIFtpdGVtc10gSXRlbXMgdG8gdG9nZ2xlLiBJZiBpdGVtcyBhcmUgbm90IHNldCBhbGwgaXRlbXMgd2lsbCBiZSB0b2dnbGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICB0b2dnbGVJdGVtcyhpc1NlbGVjdDogYm9vbGVhbiwgaXRlbXM/OiBhbnlbXSkge1xuICAgIGlmIChpc1NlbGVjdCkge1xuICAgICAgY29uc3QgaGFzSXRlbXMgPSBpdGVtcyAmJiBpdGVtcy5sZW5ndGg7XG4gICAgICBsZXQgaXRlbXNUb1RvZ2dsZSA9IHRoaXMuX2dyb3Vwcy5yZWR1Y2UoKGFsbEl0ZW1zLCBncm91cCkgPT4gYWxsSXRlbXMuY29uY2F0KGdyb3VwLml0ZW1zKSwgW10pO1xuXG4gICAgICAvLyBEb24ndCBhbGxvdyB0byBzZWxlY3QgYWxsIGl0ZW1zIGluIHNpbmdsZSBtb2RlLlxuICAgICAgaWYgKCF0aGlzLmlzTXVsdGlwbGUgJiYgIWhhc0l0ZW1zKSB7XG4gICAgICAgIGl0ZW1zVG9Ub2dnbGUgPSBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIHNwZWNpZmljIGl0ZW1zLlxuICAgICAgaWYgKGhhc0l0ZW1zKSB7XG4gICAgICAgIGl0ZW1zVG9Ub2dnbGUgPSBpdGVtc1RvVG9nZ2xlLmZpbHRlcihpdGVtVG9Ub2dnbGUgPT4gaXRlbXMuZmluZChpdGVtID0+IHRoaXMuX2dldEl0ZW1WYWx1ZShpdGVtVG9Ub2dnbGUpID09PSB0aGlzLl9nZXRJdGVtVmFsdWUoaXRlbSkpICE9PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIC8vIFRha2UgdGhlIGZpcnN0IGl0ZW0gZm9yIHNpbmdsZSBtb2RlLlxuICAgICAgICBpZiAoIXRoaXMuaXNNdWx0aXBsZSkge1xuICAgICAgICAgIGl0ZW1zVG9Ub2dnbGUuc3BsaWNlKDAsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGl0ZW1zVG9Ub2dnbGUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgdGhpcy5fYWRkU2VsZWN0ZWRJdGVtKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRJdGVtc1RvQ29uZmlybSh0aGlzLl9zZWxlY3RlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRvIHRoZSB0b3Agb2YgTW9kYWwgY29udGVudC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2Nyb2xsdG90b3ApLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzY3JvbGwgaGFzIGJlZW4gY29tcGxldGVkLlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBzY3JvbGxUb1RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmICghc2VsZi5faXNPcGVuZWQpIHtcbiAgICAgICAgcmVqZWN0KCdJb25pY1NlbGVjdGFibGUgY29udGVudCBjYW5ub3QgYmUgc2Nyb2xsZWQuJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5fbW9kYWxDb21wb25lbnQuX2NvbnRlbnQuc2Nyb2xsVG9Ub3AoKS50aGVuKCgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0byB0aGUgYm90dG9tIG9mIE1vZGFsIGNvbnRlbnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Njcm9sbHRvYm90dG9tKS5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc2Nyb2xsIGhhcyBiZWVuIGNvbXBsZXRlZC5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2Nyb2xsVG9Cb3R0b20oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBpZiAoIXNlbGYuX2lzT3BlbmVkKSB7XG4gICAgICAgIHJlamVjdCgnSW9uaWNTZWxlY3RhYmxlIGNvbnRlbnQgY2Fubm90IGJlIHNjcm9sbGVkLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuX21vZGFsQ29tcG9uZW50Ll9jb250ZW50LnNjcm9sbFRvQm90dG9tKCkudGhlbigoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyBzZWFyY2ggcHJvY2VzcyBieSBzaG93aW5nIExvYWRpbmcgc3Bpbm5lci5cbiAgICogVXNlIGl0IHRvZ2V0aGVyIHdpdGggYG9uU2VhcmNoYCBldmVudCB0byBpbmRpY2F0ZSBzZWFyY2ggc3RhcnQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3N0YXJ0c2VhcmNoKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc3RhcnRTZWFyY2goKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNob3dMb2FkaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBzZWFyY2ggcHJvY2VzcyBieSBoaWRpbmcgTG9hZGluZyBzcGlubmVyIGFuZCByZWZyZXNoaW5nIGl0ZW1zLlxuICAgKiBVc2UgaXQgdG9nZXRoZXIgd2l0aCBgb25TZWFyY2hgIGV2ZW50IHRvIGluZGljYXRlIHNlYXJjaCBlbmQuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZHNlYXJjaCkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGVuZFNlYXJjaCgpIHtcbiAgICBpZiAoIXRoaXMuX2lzRW5hYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaGlkZUxvYWRpbmcoKTtcblxuICAgIC8vIFdoZW4gaW5zaWRlIElvbmljIE1vZGFsIGFuZCBvblNlYXJjaCBldmVudCBpcyB1c2VkLFxuICAgIC8vIG5nRG9DaGVjaygpIGRvZXNuJ3Qgd29yayBhcyBfaXRlbXNEaWZmZXIgZmFpbHMgdG8gZGV0ZWN0IGNoYW5nZXMuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvaXNzdWVzLzQ0LlxuICAgIC8vIFJlZnJlc2ggaXRlbXMgbWFudWFsbHkuXG4gICAgdGhpcy5fc2V0SXRlbXModGhpcy5pdGVtcyk7XG4gICAgdGhpcy5fZW1pdE9uU2VhcmNoU3VjY2Vzc09yRmFpbCh0aGlzLl9oYXNGaWx0ZXJlZEl0ZW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGVzIGluZmluaXRlIHNjcm9sbC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jZW5hYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBlbmFibGVJbmZpbml0ZVNjcm9sbCgpIHtcbiAgICBpZiAoIXRoaXMuX2hhc0luZmluaXRlU2Nyb2xsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbW9kYWxDb21wb25lbnQuX2luZmluaXRlU2Nyb2xsLmRpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogRGlzYWJsZXMgaW5maW5pdGUgc2Nyb2xsLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNkaXNhYmxlaW5maW5pdGVzY3JvbGwpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgSW9uaWNTZWxlY3RhYmxlQ29tcG9uZW50XG4gICAqL1xuICBkaXNhYmxlSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5kaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogRW5kcyBpbmZpbml0ZSBzY3JvbGwuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI2VuZGluZmluaXRlc2Nyb2xsKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgZW5kSW5maW5pdGVTY3JvbGwoKSB7XG4gICAgaWYgKCF0aGlzLl9oYXNJbmZpbml0ZVNjcm9sbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21vZGFsQ29tcG9uZW50Ll9pbmZpbml0ZVNjcm9sbC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX3NldEl0ZW1zKHRoaXMuaXRlbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWdnZXJzIHNlYXJjaCBvZiBpdGVtcy5cbiAgICogKipOb3RlKio6IGBjYW5TZWFyY2hgIGhhcyB0byBiZSBlbmFibGVkLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNzZWFyY2gpLlxuICAgKlxuICAgKiBAcGFyYW0gdGV4dCBUZXh0IHRvIHNlYXJjaCBpdGVtcyBieS5cbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2VhcmNoKHRleHQ6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkIHx8ICF0aGlzLl9pc09wZW5lZCB8fCAhdGhpcy5jYW5TZWFyY2gpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9zZXRIYXNTZWFyY2hUZXh0KCk7XG4gICAgdGhpcy5fZmlsdGVySXRlbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBMb2FkaW5nIHNwaW5uZXIuXG4gICAqIFNlZSBtb3JlIG9uIFtHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9lYWtvcmlha2luL2lvbmljLXNlbGVjdGFibGUvd2lraS9Eb2N1bWVudGF0aW9uI3Nob3dsb2FkaW5nKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgc2hvd0xvYWRpbmcoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0VuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1NlYXJjaGluZyA9IHRydWU7XG4gIH1cblxuICAvKipcbiAgICogSGlkZXMgTG9hZGluZyBzcGlubmVyLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlbG9hZGluZykuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIGhpZGVMb2FkaW5nKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBgaW9uaWNTZWxlY3RhYmxlQWRkSXRlbVRlbXBsYXRlYC5cbiAgICogU2VlIG1vcmUgb24gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2Vha29yaWFraW4vaW9uaWMtc2VsZWN0YWJsZS93aWtpL0RvY3VtZW50YXRpb24jc2hvd2FkZGl0ZW10ZW1wbGF0ZSkuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBJb25pY1NlbGVjdGFibGVDb21wb25lbnRcbiAgICovXG4gIHNob3dBZGRJdGVtVGVtcGxhdGUoKSB7XG4gICAgdGhpcy5fdG9nZ2xlQWRkSXRlbVRlbXBsYXRlKHRydWUpO1xuXG4gICAgLy8gUG9zaXRpb24gdGhlIHRlbXBsYXRlIG9ubHkgd2hlbiBpdCBzaG91cyB1cC5cbiAgICB0aGlzLl9wb3NpdGlvbkFkZEl0ZW1UZW1wbGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGVzIGBpb25pY1NlbGVjdGFibGVBZGRJdGVtVGVtcGxhdGVgLlxuICAgKiBTZWUgbW9yZSBvbiBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vZWFrb3JpYWtpbi9pb25pYy1zZWxlY3RhYmxlL3dpa2kvRG9jdW1lbnRhdGlvbiNoaWRlYWRkaXRlbXRlbXBsYXRlKS5cbiAgICpcbiAgICogQG1lbWJlcm9mIElvbmljU2VsZWN0YWJsZUNvbXBvbmVudFxuICAgKi9cbiAgaGlkZUFkZEl0ZW1UZW1wbGF0ZSgpIHtcbiAgICAvLyBDbGVhbiBpdGVtIHRvIGFkZCBhcyBpdCdzIG5vIGxvbmdlciBuZWVkZWQgb25jZSBBZGQgSXRlbSBNb2RhbCBoYXMgYmVlbiBjbG9zZWQuXG4gICAgdGhpcy5faXRlbVRvQWRkID0gbnVsbDtcbiAgICB0aGlzLl90b2dnbGVBZGRJdGVtVGVtcGxhdGUoZmFsc2UpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS1pbm5lclwiPlxuICA8ZGl2IGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS12YWx1ZVwiPlxuICAgIDxkaXYgKm5nSWY9XCJ2YWx1ZVRlbXBsYXRlICYmIF92YWx1ZUl0ZW1zLmxlbmd0aCAmJiBpc011bHRpcGxlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInZhbHVlVGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgdmFsdWU6IF92YWx1ZUl0ZW1zIH1cIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS1pdGVtXCJcbiAgICAgICpuZ0lmPVwidmFsdWVUZW1wbGF0ZSAmJiBfdmFsdWVJdGVtcy5sZW5ndGggJiYgIWlzTXVsdGlwbGVcIj5cbiAgICAgIDxkaXYgW25nVGVtcGxhdGVPdXRsZXRdPVwidmFsdWVUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7IHZhbHVlOiBfdmFsdWVJdGVtc1swXSB9XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiAqbmdJZj1cIiF2YWx1ZVRlbXBsYXRlICYmIF92YWx1ZUl0ZW1zLmxlbmd0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbVwiXG4gICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZUl0ZW0gb2YgX3ZhbHVlSXRlbXNcIj5cbiAgICAgICAge3tfZm9ybWF0VmFsdWVJdGVtKHZhbHVlSXRlbSl9fVxuICAgICAgPC9kaXY+XG4gICAgPC9zcGFuPlxuICAgIDxkaXYgKm5nSWY9XCJfaGFzUGxhY2Vob2xkZXIgJiYgcGxhY2Vob2xkZXJUZW1wbGF0ZVwiXG4gICAgICBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtdmFsdWUtaXRlbVwiPlxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJwbGFjZWhvbGRlclRlbXBsYXRlXCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS12YWx1ZS1pdGVtXCJcbiAgICAgICpuZ0lmPVwiX2hhc1BsYWNlaG9sZGVyICYmICFwbGFjZWhvbGRlclRlbXBsYXRlXCI+XG4gICAgICB7e3BsYWNlaG9sZGVyfX1cbiAgICA8L2Rpdj5cbiAgICA8IS0tIEZpeCBpY29uIGFsbGlnbm1lbnQgd2hlbiB0aGVyZSdzIG5vIHZhbHVlIG9yIHBsYWNlaG9sZGVyLiAtLT5cbiAgICA8c3BhbiAqbmdJZj1cIiFfdmFsdWVJdGVtcy5sZW5ndGggJiYgIV9oYXNQbGFjZWhvbGRlclwiPiZuYnNwOzwvc3Bhbj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCJpY29uVGVtcGxhdGVcIiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtaWNvbi10ZW1wbGF0ZVwiPlxuICAgICAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJpY29uVGVtcGxhdGVcIj48L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgKm5nSWY9XCIhaWNvblRlbXBsYXRlXCIgY2xhc3M9XCJpb25pYy1zZWxlY3RhYmxlLWljb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW9uaWMtc2VsZWN0YWJsZS1pY29uLWlubmVyXCI+PC9kaXY+XG4gIDwvZGl2PlxuICA8IS0tIE5lZWQgdG8gYmUgdHlwZT1cImJ1dHRvblwiIG90aGVyd2lzZSBjbGljayBldmVudCB0cmlnZ2VycyBmb3JtIG5nU3VibWl0LiAtLT5cbiAgPGJ1dHRvbiAoZm9jdXMpPVwib25CdXR0b25Gb2N1cygpXCIgKGJsdXIpPVwib25CdXR0b25CbHVyKClcIiBjbGFzcz1cImlvbmljLXNlbGVjdGFibGUtY292ZXJcIiBbYXJpYUxhYmVsXT1cImFyaWFMYWJlbFwiIFtkaXNhYmxlZF09XCIhaXNFbmFibGVkXCIgdGFiaW5kZXg9XCIwXCJcbiAgICAoY2xpY2spPVwiX2NsaWNrKClcIiB0eXBlPVwiYnV0dG9uXCI+XG4gIDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=