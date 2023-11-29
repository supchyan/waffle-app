export default {
    data: () => ({
      // for empty content
      booksPlaceholder: 'There is no books, so create a new one!',
      recipesPlaceholder: 'There is no recipes, why not to add a few?',

      // book props
      contentID: 0,
      bookID: 1,
      books: [],
      bookTitle: '',

      // recipe props
      recipeID: 1,
      recipes: [],
      recipeTitle: '',
      recipeDesc: '',

      // overlay props
      overlay: false,
      canEdit: false, // can user edit props of the recipe
      offset: 200, // top of the overlay
      mousePos: 0,
      oldMousePos: 0,
      isScrolling: false,
      scrollPos: 0,
      oldScrollPos: 200, // depends on offset value
      overlayBtn: 'mdi-pencil', // edit / save btn in recipe's overlay
      overlayTooltip: 'Edit', // tooltip message below the edit / save btn
    }),
    methods: {
      CheckPlaceHolder() {
        if(this.books.length != 0) {
          this.booksPlaceholder = '';
        }
        if(this.recipes.length != 0) {
          this.recipesPlaceholder = '';
        }
      },
      AddBook() {
        this.books.push({
          id: this.bookID,
          title: 'A new book ' + this.bookID,
        });
        this.bookID++;
      },
      AddRecipe() {
        if(this.books.length != 0) {
            this.recipes.push({
            id: this.recipeID,
            title: 'A new recipe ' + this.recipeID,
            desc: 'A new created recipe',
          });
          this.recipeID++;
        }
      },
      ClickToCopy() {
        this.contentID = document.getElementById('content-id').innerText;
        return navigator.clipboard.writeText(this.contentID);
      },
      SelectedBookAI() {
        this.contentID = self.crypto.getRandomValues(new Uint32Array(1));
        this.recipes = [];
      },
      SelectedRecipeAI() {
        this.oldScrollPos = 200;
        this.scrollPos = 200;
        document.getElementById('recipe-overlay').style.setProperty('--overlay-top', this.oldScrollPos + 'px');
      },
      ScrollAI() {
        window.addEventListener('mousedown', (event) => {
            this.isScrolling = true;
            this.oldMousePos = { x: event.pageX, y: event.pageY };
        });
        window.addEventListener('mousemove', (event) => {
            if(!this.isScrolling) return;

            this.mousePos = { x: event.pageX, y: event.pageY };
            this.scrollPos = this.oldScrollPos + this.mousePos.y - this.oldMousePos.y;

            document.getElementById('recipe-overlay').style.setProperty('--overlay-top', this.scrollPos + 'px');
        });
        window.addEventListener('mouseup', (event) => {
            this.isScrolling = false;
            this.oldScrollPos = this.scrollPos;
        });
      },
      EditRecipe() {
        if(this.overlayBtn == 'mdi-pencil') {
          this.overlayBtn = 'mdi-content-save';
          this.overlayTooltip = 'Save'
          canEdit = true;

        } else {
          this.overlayBtn = 'mdi-pencil';
          this.overlayTooltip = 'Edit'
          canEdit = false;
        }
      },
      CloseOverlay() {
        window.addEventListener("keyup", (e) => {
          if(e.key == 'Escape') {
            this.overlay = false;
          }
        });
      },
    }
  }