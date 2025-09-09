/*
Author       : Dreamstechnologies
Template Name: Dreams rent - Bootstrap Admin Template
*/

(function () {
    "use strict";

	// Variables declarations
	var $wrapper = $('.main-wrapper');
	var $slimScrolls = $('.slimscroll');
	var $pageWrapper = $('.page-wrapper');
	feather.replace();

	// Page Content Height Resize
	$(window).resize(function () {
		if ($('.page-wrapper').length > 0) {
			var height = $(window).height();
			$(".page-wrapper").css("min-height", height);
		}
	});

	// Mobile menu sidebar overlay
	$('body').append('<div class="sidebar-overlay"></div>');

	$(document).on('click', '#mobile_btn', function() {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		$('#task_window').removeClass('opened');
		return false;
	});

	$(".sidebar-overlay").on("click", function () {
		$('html').removeClass('menu-opened');
		$(this).removeClass('opened');
		$wrapper.removeClass('slide-nav');
		$('.sidebar-overlay').removeClass('opened');
		$('#task_window').removeClass('opened');
	});

	// Stick Sidebar

	if ($(window).width() > 767) {
		if ($('.theiaStickySidebar').length > 0) {
			$('.theiaStickySidebar').theiaStickySidebar({
				// Settings
				additionalMarginTop: 30
			});
		}
	}	

	// Custom Country Code Selector

	if ($('#phone').length > 0) {
		var input = document.querySelector("#phone");
		window.intlTelInput(input, {
			utilsScript: "assets/plugins/intltelinput/js/utils.js",
		});
	}
	
	// Loader
	setTimeout(function () {
		$('#global-loader');
		setTimeout(function () {
			$("#global-loader").fadeOut("slow");
		}, 100);
	}, 100);

	// Datetimepicker
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
	
	// toggle-password
	if($('.toggle-password').length > 0) {
		$(document).on('click', '.toggle-password', function() {
			$(this).toggleClass("ti-eye ti-eye-off");
			var input = $(".pass-input");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passwords').length > 0) {
		$(document).on('click', '.toggle-passwords', function() {
			$(this).toggleClass("ti-eye ti-eye-off");
			var input = $(".pass-inputs");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {
				input.attr("type", "password");
			}
		});
	}
	if($('.toggle-passworda').length > 0) {
		$(document).on('click', '.toggle-passworda', function() {
			$(this).toggleClass("ti-eye ti-eye-off");
			var input = $(".pass-inputa");
			if (input.attr("type") == "password") {
				input.attr("type", "text");
			} else {setTimeout
				input.attr("type", "password");
			}
		});
	}

	// Select 2	
	if ($('.select2').length > 0) {
	 	$(".select2").select2();
	}
	
	if ($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

	// Sidebar Slimscroll
	if($slimScrolls.length > 0) {
		$slimScrolls.slimScroll({
			height: 'auto',
			width: '100%',
			position: 'right',
			size: '7px',
			color: '#ccc',
			wheelStep: 10,
			touchScrollStep: 100
		});
		var wHeight = $(window).height() - 60;
		$slimScrolls.height(wHeight);
		$('.sidebar .slimScrollDiv').height(wHeight);
		$(window).resize(function() {
			var rHeight = $(window).height() - 60;
			$slimScrolls.height(rHeight);
			$('.sidebar .slimScrollDiv').height(rHeight);
		});
	}

	// Sidebar
	var Sidemenu = function() {
		this.$menuItem = $('.sidebar-menu a');
	};

	function init() {
		var $this = Sidemenu;
		$('.sidebar-menu a').on('click', function(e) {
			if($(this).parent().hasClass('submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('subdrop')) {
				$('ul', $(this).parents('ul:first')).slideUp(250);
				$('a', $(this).parents('ul:first')).removeClass('subdrop');
				$(this).next('ul').slideDown(350);
				$(this).addClass('subdrop');
			} else if($(this).hasClass('subdrop')) {
				$(this).removeClass('subdrop');
				$(this).next('ul').slideUp(350);
			}
		});
		$('.sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');
	}

	
	// Sidebar Initiate
	init();
	$(document).on('mouseover', function(e) {
        e.stopPropagation();
        if ($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
            var targ = $(e.target).closest('.sidebar, .header-left, #toggle_btn').length;
            if (targ) {
                $('body').addClass('expand-menu');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').removeClass('expand-menu');
                $('.subdrop + ul').slideUp();
            }
            return false;
        }
    });

	// Table Responsive

	setTimeout(function () {
		$(document).ready(function () {
			$('.table').parent().addClass('table-responsive');
		});
	}, 1000);
	
	// Date Range Picker

	if($('.bookingrange').length > 0) {
		var start = moment().subtract(6, 'days');
		var end = moment();
		function booking_range(start, end) {
			$('.bookingrange span').html(start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY'));
		}

		$('.bookingrange').daterangepicker({
			startDate: start,
			endDate: end,
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Year': [moment().startOf('year'), moment().endOf('year')],
				'Next Year': [moment().add(1, 'year').startOf('year'), moment().add(1, 'year').endOf('year')]
			}
		}, booking_range);
		booking_range(start, end);
	}

	
	if($('.daterange').length > 0) {
		$('.daterange').daterangepicker({
			autoUpdateInput: false,  // Prevents immediate update of input field
			ranges: {
				'Today': [moment(), moment()],
				'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
				'Last 7 Days': [moment().subtract(6, 'days'), moment()],
				'Last 30 Days': [moment().subtract(29, 'days'), moment()],
				'This Year': [moment().startOf('year'), moment().endOf('year')],
				'Next Year': [moment().add(1, 'year').startOf('year'), moment().add(1, 'year').endOf('year')]
			},
			locale: {
				cancelLabel: 'Clear'
			}
		});
		$('#daterange').on('input', function() {
			var textLength = $(this).val().length;
			$(this).css('width', (textLength + 10) + 'px'); // 10ch adds space for padding
		});
	
		// Event when the user selects a date
		$('.daterange').on('apply.daterangepicker', function(ev, picker) {
			$(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
		});
	
		// Event for clearing the selected date
		$('.daterange').on('cancel.daterangepicker', function(ev, picker) {
			$(this).val('');  // Resets to placeholder
		});
	}

	// Datatable

	if($('.datatable').length > 0) {
		$('.datatable').DataTable({
			"bFilter": false,
			"lengthChange": false,
			"drawCallback": function() {
            // Move the info and pagination to the card-footer
            var tableWrapper = $(this).closest('.dataTables_wrapper');
            var info = tableWrapper.find('.dataTables_info');
            var pagination = tableWrapper.find('.dataTables_paginate');

            // Clear the card-footer and append info and pagination
            $('.table-footer').empty()
                .append($('<div class="d-flex justify-content-between align-items-center w-100"></div>')
                    .append($('<div class="datatable-info"></div>').append(info))
                    .append($('<div class="datatable-pagination"></div>').append(pagination))
                );
        	}
		});
	}

	//toggle_btn
	$(document).on('click', '#toggle_btn', function() {
		if ($('body').hasClass('mini-sidebar')) {
			$('body').removeClass('mini-sidebar');
			$(this).addClass('active');
			$('.subdrop + ul');
			localStorage.setItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").removeClass("mini-sidebar");
				$(".header-left").addClass("active");
			}, 100);
		} else {
			$('body').addClass('mini-sidebar');
			$(this).removeClass('active');
			$('.subdrop + ul');
			localStorage.removeItem('screenModeNightTokenState', 'night');
			setTimeout(function() {
				$("body").addClass("mini-sidebar");
				$(".header-left").removeClass("active");
			}, 100);
		}
		return false;
	});

	var myDiv = document.querySelector('.sticky-sidebar-one');	

	if($('.win-maximize').length > 0) {
		$('.win-maximize').on('click', function(e){
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		})
	}

	var selectAllItems2 = "#select-all2";
	var checkboxItem2 = ".form-check.form-check-md.check2 :checkbox";
	$(selectAllItems2).on('click', function(){
		
		if (this.checked) {
		$(checkboxItem2).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem2).each(function() {
			this.checked = false;
		});
		}
		
	});
	var selectAllItems3 = "#select-all3";
	var checkboxItem3 = ".form-check.form-check-md.check3 :checkbox";
	$(selectAllItems3).on('click', function(){
		
		if (this.checked) {
		$(checkboxItem3).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem3).each(function() {
			this.checked = false;
		});
		}
		
	});
	var selectAllItems4 = "#select-all4";
	var checkboxItem4 = ".form-check.form-check-md.check4 :checkbox";
	$(selectAllItems4).on('click', function(){
		
		if (this.checked) {
		$(checkboxItem4).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem4).each(function() {
			this.checked = false;
		});
		}
		
	});
		
	// Tooltip
	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}	

	
	$('ul.tabs li').on('click', function(){
		var $this = $(this);
		var $theTab = $(this).attr('id');
		console.log($theTab);
		if($this.hasClass('active')){
		  // do nothing
		} else{
		  $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
		  $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
		}
		
	});

	// Datetimepicker time

	if ($('.timepicker').length > 0) {
		$('.timepicker').datetimepicker({
			format: 'HH:mm A',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// Increment Decrement

	$(".inc").on('click', function() {
	    updateValue(this, 1);
	});
	$(".dec").on('click', function() {
	    updateValue(this, -1);
	});
	function updateValue(obj, delta) {
	    var item = $(obj).parent().find("input");
	    var newValue = parseInt(item.val(), 10) + delta;
	    item.val(Math.max(newValue, 0));
	}


	  /* card with fullscreen */
	  let DIV_CARD = ".card";
	  let cardFullscreenBtn = document.querySelectorAll(
		'[data-bs-toggle="card-fullscreen"]'
	  );
	  cardFullscreenBtn.forEach((ele) => {
		ele.addEventListener("click", function (e) {
		  let $this = this;
		  let card = $this.closest(DIV_CARD);
		  card.classList.toggle("card-fullscreen");
		  card.classList.remove("card-collapsed");
		  e.preventDefault();
		  return false;
		});
	  });
	  /* card with fullscreen */

	    /* card with close button */
  		let DIV_CARD_CLOSE = ".card";
		let cardRemoveBtn = document.querySelectorAll(
			'[data-bs-toggle="card-remove"]'
		);
		cardRemoveBtn.forEach((ele) => {
			ele.addEventListener("click", function (e) {
			e.preventDefault();
			let $this = this;
			let card = $this.closest(DIV_CARD_CLOSE);
			card.remove();
			return false;
			});
		});
		/* card with close button */

		setTimeout(function(){
			$(".rating-select").on('click', function() {
				$(this).find("i").toggleClass("ti-star ti-star-filled filled");
			});
		},100);

	// Datetimepicker

	if($('.yearpicker').length > 0 ){
		$('.yearpicker').datetimepicker({
			viewMode: 'years',
			format: 'YYYY',

			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// Upload Image 

	$('.image-sign').on('change', function() {
		let frames = $(this).closest('.upload-pic').find(".frames");
		frames.find('img').remove(); // Only remove images, keep other elements
	
		for (let i = 0; i < $(this)[0].files.length; i++) {
			frames.append('<img src="' + window.URL.createObjectURL(this.files[i]) + '" width="100px" height="100px">');
		}
	});

	// Datetimepicker
	if($('.datepic').length > 0 ){
		$('.datepic').datetimepicker({
			format: 'DD-MM-YYYY',
			keepOpen: true,inline: true,
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}

	// Contact Wizard
	if($('.add-wizard').length > 0) {
		$(".add-wizard .wizard-next").on('click', function () { 
			$(this).closest('fieldset').next().fadeIn('slow');
			$(this).closest('fieldset').css({
				'display': 'none'
			});
			$('.nav .active').removeClass('active').addClass('activated').next().addClass('active');
		});
		$(".add-wizard .wizard-prev").on('click', function () { 
			$(this).closest('fieldset').prev().fadeIn('slow');
			$(this).closest('fieldset').css({
				'display': 'none'
			});
			$('.nav .active').removeClass('active').prev().removeClass('activated').addClass('active');
		});
	}

	var selectAllItems = "#select-all";
	var checkboxItem = ":checkbox";
	$(selectAllItems).on('click', function(){	
		if (this.checked) {
		$(checkboxItem).each(function() {
			this.checked = true;
		});
		} else {
		$(checkboxItem).each(function() {
			this.checked = false;
		});
		}		
	});

	function toggleFullscreen(elem) {
		elem = elem || document.documentElement;
		if (!document.fullscreenElement && !document.mozFullScreenElement &&
		!document.webkitFullscreenElement && !document.msFullscreenElement) {
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
		} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
		}
	}

	// Checkbox Active

	if ($('.form-checkbox').length > 0) {
		$('.form-checkbox').on('click', function (e) {
			e.stopPropagation();
			var checkbox = $(this).find('input[type="checkbox"]');
			var isChecked = !checkbox.prop('checked');	
			checkbox.prop('checked', isChecked);
			$(this).toggleClass('active', isChecked); 
		});
		$('.form-checkbox input[type="checkbox"]').on('click', function (e) {
			e.stopPropagation(); // Prevents triggering parent click event	
			var checkboxContainer = $(this).closest('.form-checkbox');
			var isChecked = $(this).prop('checked');
	
			checkboxContainer.toggleClass('active', isChecked); 
		});
	}

	// Select Color

	if($('.select2-color').length > 0) {
		$(".select2-color").select2({
			templateResult: formatColor,
			templateSelection: formatColor
		  });		  
		  function formatColor(option) {
			if (!option.id) return option.text; // Skip placeholder		  
			let className = $(option.element).attr("class") || ""; 		  
			return $(
			  '<span>' +
			  '<span class="color-icon ' + className + '"></span>' + 
			  option.text +
			  '</span>'
			);
		  }		  
		  function formatSelected(option) {
			return option.text; 
		  }
	}

	if($('.document-upload').length > 0) {
		$(".document-upload").on("click", function (e) {
			if (!$(e.target).is(".image-sign")) {
				$(".image-sign").trigger("click"); 
			}
		});
	
		// Handle image upload and preview
		$(".image-sign").on("change", function () {
			let previewContainer = $(".uploaded-images");
			let files = this.files;
	
			if (files.length > 0) {
				for (let i = 0; i < files.length; i++) {
					let reader = new FileReader();
					reader.onload = function (e) {
						let newImage = `
							<div class="uploaded-img">
								<img src="${e.target.result}" alt="img">
								<a href="javascript:void(0);" class="trash-icon fs-12"><i class="ti ti-trash"></i></a>
							</div>
						`;
						previewContainer.append(newImage);
					};
					reader.readAsDataURL(files[i]);
				}
			}
		});
	
		// Remove uploaded image
		$(document).on("click", ".trash-icon", function () {
			$(this).closest(".uploaded-img").remove();
		});
	}
	
	// Checkbox Active

	if ($('.custom-checkbox').length > 0) {
		$('.custom-checkbox').on('click', function (e) {
			e.stopPropagation();
			$(this).toggleClass('active');
			var checkbox = $(this).find('input[type="checkbox"]');
			checkbox.prop('checked', !checkbox.prop('checked'));
		});
		$('.custom-checkbox input[type="checkbox"]').on('click', function (e) {
			$(this).closest('.custom-checkbox').toggleClass('active');
			var checkbox = $(this).find('input[type="checkbox"]');
			checkbox.prop('checked', !checkbox.prop('checked'));
		});
	}

	// Clipboard 
	if($('.clipboard').length > 0) {
		var clipboard = new Clipboard('.btn');
	}

	// Disable Input
	if($('.unlimited-checkbox').length > 0) {
		$(".unlimited-checkbox input[type='checkbox']").on("change", function () {
			let unlimitedWrap = $(this).closest(".unlimited-price").find(".unlimited-wrap input");
			unlimitedWrap.prop("disabled", $(this).is(":checked"));
		});
	}

	if($('.select-all').length > 0) {
		$(".select-all").on("click", function () {
			let checkboxGroup = $(this).closest(".amenity-wrap").find(":checkbox");
			checkboxGroup.prop("checked", this.checked);
		});
	}

	// Multi Selectone

	if($('.limited-multi-select').length > 0) {
		$(".limited-multi-select").select2();
	
		$(".limited-multi-select").on("select2:select", function (e) {
			var selectedValue = e.params.data.id;
			$(this).val([selectedValue]).trigger("change"); // Keep only the latest selection
		});
	}
	$(".invoice-star").on("click", function () {
		$('.invoice-template').removeClass("active");
		$(this).parent().parent().parent().addClass("active");
	});

	// Quill Editor

	if($('.editor').length > 0) {
		document.querySelectorAll('.editor').forEach((editor) => {
			new Quill(editor, {
			  theme: 'snow'
			});
		});
	}

	// Custom Country Code Selector

	if ($('#phone2').length > 0) {
		var input = document.querySelector("#phone2");
		window.intlTelInput(input, {
			utilsScript: "assets/plugins/intltelinput/js/utils.js",
		});
	}

	if ($('#phone3').length > 0) {
		var input = document.querySelector("#phone3");
		window.intlTelInput(input, {
			utilsScript: "assets/plugins/intltelinput/js/utils.js",
		});
	}

	if ($('#colorpicker').length > 0) {		
		$('#colorpicker').on('input', function() {
			$('#hexcolor').val(this.value);
		});
	}

	if ($('#hexcolor').length > 0) {		
		$('#hexcolor').on('input', function() {
			$('#colorpicker').val(this.value);
		  });
	}

	$(".add-new-benifit").on('click', function () {

		var servicecontent = '<div class="mb-1 extra-benifit-row">' +
			'<div class="d-flex align-items-center">' +
			'<input type="text" class="form-control flex-fill mb-2">' +
			'<a href="#" class="delete-item btn btn-sm"><i class="ti ti-trash text-danger fs-16"></i></a>' +
			'</div>' +
			'</div>' ;
	
		$(".add-insurance-benifit").append(servicecontent);
		return false;
	});

	$(".add-new-benifit-2").on('click', function () {

		var servicecontent = '<div class="mb-1 extra-benifit-row-2">' +
			'<div class="d-flex align-items-center">' +
			'<input type="text" class="form-control flex-fill mb-2" value="Quick assistance for unexpected breakdowns.">' +
			'<a href="#" class="delete-item btn btn-sm"><i class="ti ti-trash text-danger fs-16"></i></a>' +
			'</div>' +
			'</div>' ;
	
		$(".add-insurance-benifit-2").append(servicecontent);
		return false;
	});

	$(".add-insurance-benifit-2").on('click', '.delete-item', function () {
		$(this).closest('.extra-benifit-row-2').remove();
		return false;
	});

	if($('.delivery-add').length > 0) {
		$('.delivery-add a').on('click', function (e) {
			$(this).toggleClass("active");
		});
	}
	
	
})();

	$(document).ready(function () {
		/*---------------------------------------------------------*/
		$(".wizard-next-btn").on('click', function () { // Function Runs On NEXT Button Click
			$(this).closest('fieldset').next().fadeIn('slow');
			$(this).closest('fieldset').css({
				'display': 'none'
			});

		});
		$(".wizard-prev-btn").on('click', function () { // Function Runs On NEXT Button Click
			$(this).closest('fieldset').prev().fadeIn('slow');
			$(this).closest('fieldset').css({
				'display': 'none'
			});

		});
	});

