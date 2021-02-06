<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap logo" width="200" height="165">
  </a>
</p>

<h3 align="center">Custom - Bootstrap</h3>

<p>Adding additional features to bootstrap down</p>

<ol>
  <li style="border-bottom:1px solid #333:padding:10px 0;">Adding search/filter to dropdown
  <h4>View</h4>
  <img src="https://github.com/chandar1119/dropdown/blob/master/assets/images/onlyfor-readme/sample-search.png">

  <h4>HTML PART</h4>
  <code>
    <div class="dropdown-filter-container d-flex align-items-center">
      <input type="text" value="" placeholder="Search Country" data-linkedto-list="#dropdownMenu" class="form-control" />
      <a href="javascript:void(0)" class="clear-dropdown-search"></a>
    </div>
  </code>
  search input data-linkedto-list must be same as <b>.dropdown-menu-list</b> attribute id - linking filter feature
  <h6>Referrence </h6>
  <img src="https://github.com/chandar1119/dropdown/blob/master/assets/images/onlyfor-readme/input-ref.png">

  </li>
  <li style="border-bottom:1px solid #333:padding:10px 0;">Multiple Choose dropdown</li>

  <li style="border-bottom:1px solid #333:padding:10px 0;">Preload dropdown based on <b> we need to mention preload data in dropdown button attribute <code>data-predefined-list=""<code> based on this value the dropdown will be preloaded<b>

  <h4>View</h4>
  <img src="https://github.com/chandar1119/dropdown/blob/master/assets/images/onlyfor-readme/sample-dropdown.png">
  <h4>HTML PART</h4>
  <code>
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
      data-bs-toggle="dropdown" data-predefined-list="Australia,India" aria-expanded="false">
      Choose Country
      </button>
  </code>
  <h6>Referrence </h6>
  <img src="https://github.com/chandar1119/dropdown/blob/master/assets/images/onlyfor-readme/sample-html-code.png">

  </li>
</ol>

