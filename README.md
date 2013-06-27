ToggleCompositeStateField
=========================

A simple module that adds the ability to remember it's state on leaving a page 
to the default ToggleCompositeField

## Requirements

* SilverStripe 3.x

## Installation

* Download the module from here GitHub
* Extract the downloaded archive into your site root and give it any name you want. The extracted folder should contain _config.php in the root along with other files/folders
* Run ?flush=all to regenerate the manifest (no changes to the database are made)

## Usage

Use the ToggleCompositStateField as you would use the ToggleCompositeField to
show or hide a group of one or more encompassed fields. On leaving or publishing 
a page in the CMS, the field will remember its state (open/closed). 

## Example
    :::php
    $fields->addFieldToTab('Root.Main', new ToggleCompositeStateField("SocialToggle", "Social", array(
        new TextField('FacebookURL','Facebook URL'),
        new TextField('TwitterURL','Twitter URL'),
    )));

## Maintainer contact

* Martine Bloem (Martimiz) `martine[at]balbus[dot]nl` 