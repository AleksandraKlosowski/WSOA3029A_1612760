var simplemaps_continentmap_mapdata={
    main_settings: {
      //General settings
          width: "700", //or 'responsive'
      background_color: "#FFFFFF",
      background_transparent: "yes",
      popups: "detect",
      
          //State defaults
          state_description: "State description",
      state_color: "#88A4BC",
      state_hover_color: "#3B729F",
      state_url: "https://simplemaps.com",
      border_size: 1.5,
      border_color: "#ffffff",
      all_states_inactive: "no",
      all_states_zoomable: "no",
      
          //Location defaults
          location_description: "Location description",
      location_color: "#FF0067",
      location_opacity: 0.8,
      location_hover_opacity: 1,
      location_url: "",
      location_size: 25,
      location_type: "circle",
      location_border_color: "#FFFFFF",
      location_border: 2,
      location_hover_border: 2.5,
      all_locations_inactive: "no",
      all_locations_hidden: "no",
      
          //Label defaults
          label_color: "#ffffff",
      label_hover_color: "#ffffff",
      label_size: 22,
      label_font: "Arial",
      hide_labels: "no",
     
          //Zoom settings
          manual_zoom: "no",
      back_image: "no",
      arrow_box: "no",
      navigation_size: "40",
      navigation_color: "#f7f7f7",
      navigation_border_color: "#636363",
      initial_back: "no",
      initial_zoom: -1,
      initial_zoom_solo: "no",
      region_opacity: 1,
      region_hover_opacity: 0.6,
      zoom_out_incrementally: "yes",
      zoom_percentage: 0.99,
      zoom_time: 0.5,
      
          //Popup settings
          popup_color: "white",
      popup_opacity: 0.9,
      popup_shadow: 1,
      popup_corners: 5,
      popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
      popup_nocss: "no",
      
          //Advanced settings
          div: "map",
      auto_load: "yes",
      rotate: "0",
      url_new_tab: "yes",
      images_directory: "default",
      import_labels: "no",
      fade_time: 0.1,
      link_text: "View Website"
    },
    state_specific: {
      SA: {
        name: "South America",
        description: "South America Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/south-america/"
      },
      NA: {
        name: "North America",
        description: "North America Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/north-america/"
      },
      EU: {
        name: "Europe",
        description: "Europe Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/europe/"
      },
      AF: {
        name: "Africa",
        description: "Africa Covid Stats",
        color: "#c38d9e",
        hover_color: "#e8a87c",
        url: "https://covid.observer/africa/"
      },
      NS: {
        name: "North Asia",
        description: "Asia Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/asia/"
      },
      SS: {
        name: "South Asia",
        description: "Asia Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/asia/"
      },
      ME: {
        name: "Middle East",
        description: "Asia Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/asia/"
      },
      OC: {
        name: "Australia",
        description: "Australia Covid Stats",
        color: "#de5499",
        hover_color: "#e99f4c",
        url: "https://covid.observer/oceania/"
      }
    },
    locations: {
      "0": {
        name: "Gauteng",
        lat: -26.195246,
        lng: 28.034088,
        description: "default",
        color: "default",
        url: "https://sacoronavirus.co.za/",
        size: "default"
      },
    },
    labels: {}
  };