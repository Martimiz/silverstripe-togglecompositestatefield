<?php
/**
 * Toggles visibility of a group of fields, remembering the state on leaving
 * the page
 * 
 * Uses extraclass ss-togglestate instead of ss-toggle to allow for the use of
 * the default ToggleCompositeField alongside this field
 * 
 * @author Martine Bloem <martimiz@gmail.com>
 * @version 1.0
 */
class ToggleCompositeStateField extends ToggleCompositeField {
	

	public function FieldHolder($properties = array()) {
		Requirements::javascript(FRAMEWORK_DIR . '/thirdparty/jquery/jquery.js');
		Requirements::javascript(FRAMEWORK_DIR . '/thirdparty/jquery-ui/jquery-ui.js');
		Requirements::javascript(FRAMEWORK_DIR . '/thirdparty/jquery-entwine/dist/jquery.entwine-dist.js');
		Requirements::javascript(TOGGLECOMPOSITESTATEFIELD_BASE . '/javascript/ToggleCompositeStateField.js');
		Requirements::css(FRAMEWORK_DIR . '/thirdparty/jquery-ui-themes/smoothness/jquery.ui.css');

		$obj = $properties ? $this->customise($properties) : $this;
		return $obj->renderWith($this->getTemplates());
	}	
	
	public function getAttributes() {
		if($this->getStartClosed()) {
			$class = 'ss-togglestate ss-togglestate-start-closed';
		} else {
			$class = 'ss-togglestate';
		}

		return array_merge(
			$this->attributes,
			array(
				'id'    => $this->id(),
				'class' => $class . ' ' . $this->extraClass()
			)
		);
	}	
	
}
