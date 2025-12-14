---
# Leave the homepage title empty to use the site title
title: ''
date: 2024-12-14
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: '2'
      view: card
  - block: collection
    id: posts
    content:
      title: Recent Reflections
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Machine Learning
          tag: Machine Learning
        - name: Academic
          tag: Academic
        - name: Other
          tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: experience
    id: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://docs.hugoblox.com/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: MSc Artificial Intelligence Student
          company: University of Essex Online
          company_url: 'https://www.essex.ac.uk/'
          company_logo: ''
          location: Online
          date_start: '2024-10-01'
          date_end: ''
          description: |2-
              Pursuing advanced studies in:
              * Machine Learning & Deep Learning
              * Natural Language Processing
              * Computer Vision
              * AI Ethics & Governance
              * Research Methods in AI
        - title: Software Engineering Leader
          company: Various Organizations
          company_url: ''
          company_logo: ''
          location: Bucharest, Romania
          date_start: '2009-01-01'
          date_end: '2024-09-30'
          description: |2-
              15+ years building robust systems across:
              * Finance & Banking
              * Energy & Utilities
              * Compliance & Security
              * Cloud Architecture & DevOps
              * Team Leadership & Mentoring
    design:
      columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle: ''
      text: |-
        Feel free to reach out via email or connect with me on social media.
      # Contact details (edit or remove options as needed)
      email: dragos@dragoshont.com
      address:
        city: Bucharest
        country: Romania
        country_code: RO
      # Automatically link email and phone or display as text?
      autolink: true
    design:
      columns: '2'
---
