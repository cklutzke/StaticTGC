const tgc = {

    departments : [
        {
            id : 'search',
            label : 'All Departments',
            search : true,
            nav : false,
            flyout : null,
        },
        {
            id : 'games',
            label : 'All Games',
            search : true,
            nav : true,
            flyout : null
        },
        {
            id : 'parts',
            label : 'All Game Parts',
            search : true,
            nav : true,
            flyout : null
        },
        {
            id : 'bargains',
            label : 'Bargains',
            search : true,
            nav : true,
            flyout : null
        },
        {
            id : 'board-games',
            label : 'Board Games',
            search : true,
            nav : true,
            flyout : `<a href="/board-games"><img src="/tgc5/img/board-games/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <div class="row">
                    <div class="col-sm-6">
                        <h4 style="color:white;">Board Games</h4>
                        <div class="list-group">
                           <a href="/board-games?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 15 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/board-games?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 30 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/board-games?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/board-games?nR[sales][&gt;=][0]=100" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                           <a href="/board-games" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
                <a href="https://www.thegamecrafter.com/games/the-captain-is-dead-adrift" class="badge badge-secondary department-image-credit">The Captain is Dead: Adrift</a>
            </div>`
        },
        {
            id : 'card-games',
            label : 'Card Games',
            search : true,
            nav : true,
            flyout : `<a href="/card-games"><img src="/tgc5/img/card-games/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <div class="row">
                    <div class="offset-6 col-sm-6">
                        <h4>Card Games</h4>
                        <div class="list-group">
                           <a href="/card-games?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 15 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/card-games?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 30 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/card-games?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/card-games?nR[sales][&gt;=][0]=150" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                           <a href="/card-games" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
                <a href="https://www.thegamecrafter.com/games/flip-" class="badge badge-secondary department-image-credit">Flip!</a>
            </div>`
        },
        {
            id : 'dice-games',
            label : 'Dice Games',
            search : true,
            nav : true,
            flyout : `<a href="/dice-games"><img src="/tgc5/img/dice-games/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <div class="row">
                    <div class="offset-6 col-sm-6">
                        <h4 style="color: white;">Dice Games</h4>
                        <div class="list-group">
                           <a href="/dice-games?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 30 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/dice-games?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 60 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/dice-games?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/dice-games?nR[sales][&gt;=][0]=25" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                           <a href="/dice-games" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
                <a href="https://www.thegamecrafter.com/games/tee-masters" class="badge badge-secondary department-image-credit">Tee Masters</a>
            </div>`
        },
        {
            id : 'dotd',
            label : 'Deal of the Day',
            search : false,
            nav : true,
            flyout : null
        },
        {
            id : 'game-accessories',
            label : 'Game Accessories',
            search : true,
            nav : true,
            flyout : `<a href="/game-accessories"><img src="/tgc5/img/game-accessories/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4 style="color: white;">Game Accessories</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-accessories?hFR[category][0]=Dice" class="list-group-item list-group-item-action">
                             Dice
                           </a>
                           <a href="/game-accessories?hFR[category][0]=Boxes" class="list-group-item list-group-item-action">
                             Boxes
                           </a>
                           <a href="/game-accessories?hFR[category][0]=Blanks" class="list-group-item list-group-item-action">
                             Blanks
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-accessories?hFR[category][0]=Inserts" class="list-group-item list-group-item-action">
                             Inserts
                           </a>
                           <a href="/game-accessories?hFR[category][0]=Bags" class="list-group-item list-group-item-action">
                             Bags
                           </a>
                           <a href="/game-accessories?hFR[category][0]=Stands" class="list-group-item list-group-item-action">
                             Stands
                           </a>
                         </div>
                    </div>
                </div>
                <div class="list-group mx-auto mt-2">
                   <a href="/game-accessories" class="list-group-item list-group-item-action">
                     See All Game Accessories
                   </a>
                 </div>
            </div>`
        },
        {
            id : 'design-assets',
            label : 'Game Design Assets',
            search : true,
            nav : true,
            flyout : `<a href="/design-assets"><img src="/tgc5/img/design-assets/department-bkg.jpg"></a>
            <div class="flynavcontent">
                   <h4 style="color: white; text-align: right;">Game Design Assets</h4>
                   <div class="row">
                       <div class="offset-6 col-sm-6">
                           <div class="list-group">
                              <a href="/design-assets?hFR[category][0]=Character Illustrations" class="list-group-item list-group-item-action">
                                Characters
                              </a>
                              <a href="/design-assets?hFR[category][0]=Location Illustrations" class="list-group-item list-group-item-action">
                                Locations
                              </a>
                              <a href="/design-assets?hFR[category][0]=Item Illustrations" class="list-group-item list-group-item-action">
                                Items
                              </a>
                              <a href="/design-assets?hFR[category][0]=Card Templates" class="list-group-item list-group-item-action">
                                Card Templates
                              </a>
                              <a href="/design-assets" class="list-group-item list-group-item-action">
                                See All
                              </a>
                            </div>
                       </div>
               </div>
               <a href="https://www.thegamecrafter.com/design-assets/abyss-illustration" class="badge badge-secondary department-image-credit">Abyss Illustration</a>
            </div>`
        },
        {
            id : 'game-pieces',
            label : 'Game Pieces',
            search : true,
            nav : true,
            flyout : `<a href="/game-pieces"><img src="/tgc5/img/game-pieces/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4>Game Pieces</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-pieces?hFR[category][0]=Animals" class="list-group-item list-group-item-action">
                             Animals
                           </a>
                           <a href="/game-pieces?hFR[category][0]=Tokens" class="list-group-item list-group-item-action">
                             Tokens
                           </a>
                           <a href="/game-pieces?hFR[category][0]=Minerals" class="list-group-item list-group-item-action">
                             Minerals
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-pieces?hFR[category][0]=Pawns" class="list-group-item list-group-item-action">
                             Pawns
                           </a>
                           <a href="/game-pieces?hFR[category][0]=People" class="list-group-item list-group-item-action">
                             People
                           </a>
                           <a href="/game-pieces?hFR[category][0]=Buildings" class="list-group-item list-group-item-action">
                             Buildings
                           </a>
                         </div>
                    </div>
                </div>
                <div class="list-group mx-auto mt-2">
                   <a href="/game-pieces" class="list-group-item list-group-item-action">
                     See All Game Pieces
                   </a>
                 </div>
            </div>`
        },
        {
            id : 'game-upgrades',
            label : 'Game Upgrades',
            search : true,
            nav : true,
            flyout : `<a href="/game-upgrades"><img src="/tgc5/img/game-upgrades/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4 style="color: white;">Board Game Upgrades</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-upgrades?hFR[category][0]=Component Replacement" class="list-group-item list-group-item-action">
                             <h5>Component Replacements</h5>
                             <div>Give your favorite games the sparkle they deserve.</div>
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/game-upgrades?hFR[category][0]=Fan Expansion" class="list-group-item list-group-item-action">
                             <h5>Fan <br> Expansions</h5>
                             <div>Fan made expansions for your favorite games.</div>
                           </a>
                         </div>
                    </div>
                </div>
            </div>
            <a href="https://www.thegamecrafter.com/games/scythe-component-upgrade" class="badge badge-secondary department-image-credit">Scythe Component Upgrade</a>`
        },
        {
            id : 'gift-certificates',
            label : 'Gift Certificates',
            search : false,
            nav : true,
            flyout : `<a href="/gift-certificates"><img src="/tgc5/img/gift-certificates/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4 style="color: white;">Gift Certificates</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/gift-certificates" class="list-group-item list-group-item-action">
                             <h5>Physical</h5>
                             <div>Have a physical gift card shipped.</div>
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/gift-certificates" class="list-group-item list-group-item-action">
                             <h5>Digital</h5>
                             <div>Email a digital gift certificate.</div>
                           </a>
                         </div>
                    </div>
                </div>
            </div>`
        },
        {
            id : 'playing-cards',
            label : 'Playing Cards',
            search : true,
            nav : true,
            flyout : `<a href="/playing-cards"><img src="/tgc5/img/playing-cards/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4 style="color: white;">Playing Cards</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/playing-cards" class="list-group-item list-group-item-action">
                             <h5>Buy Ready Made</h5>
                             <div>Get unique decks from designers world-wide.</div>
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/custom-playing-cards" class="list-group-item list-group-item-action">
                             <h5>Make Your Own</h5>
                             <div>Design your own custom deck for just $7.99.</div>
                           </a>
                         </div>
                    </div>
                </div>
            </div>
            <a href="https://www.thegamecrafter.com/games/alice-in-wonderland-playing-cards" class="badge badge-secondary department-image-credit">Alice in Wonderland Playing Cards</a>`
        },
        {
            id : 'rpgs',
            label : 'RPGs',
            search : true,
            nav : true,
            flyout : `<a href="/rpgs"><img src="/tgc5/img/rpgs/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <div class="row">
                    <div class="col-sm-6">
                    </div>
                    <div class="col-sm-6">
                        <h4 style="color: white;">Role Playing Games</h4>
                        <div class="list-group">
                           <a href="/rpgs?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 60 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/rpgs?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 90 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/rpgs?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/rpgs?nR[sales][&gt;=][0]=10" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                           <a href="/rpgs" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
            </div>
            <a href="https://www.thegamecrafter.com/games/axebane-s-deck-of-many-dungeons" class="badge badge-secondary department-image-credit">Axebane's Deck of Many Dungeons</a>`
        },
        {
            id : 'self-improvement',
            label : 'Self Improvement',
            search : true,
            nav : true,
            flyout : `<a href="/self-improvement"><img src="/tgc5/img/self-improvement/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <div class="row">
                    <div class="col-sm-6">
                        <h4 style="color: white; background-color: rgba(100,70,25,0.5); border-radius: 10px">Self Improvement</h4>
                        <div class="list-group">
                           <a href="/self-improvement?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 30 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/self-improvement?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 60 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/self-improvement?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/self-improvement?nR[sales][&gt;=][0]=50" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                           <a href="/self-improvement" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
            </div>
            <a href="https://www.thegamecrafter.com/games/tea-and-empathy" class="badge badge-secondary department-image-credit">Tea and Empathy</a>`
        },
        {
            id : 'tarot',
            label : 'Tarot and Oracles',
            search : true,
            nav : true,
            flyout : `<a href="/tarot"><img src="/tgc5/img/tarot/department-bkg.jpg"></a>
            <div class="flynavcontent">
                <h4 style="color: white;text-align: right;">Tarot and Oracles</h4>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/tarot?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 20 %]" class="list-group-item list-group-item-action">
                             What's Hot
                           </a>
                           <a href="/tarot?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 60 %]" class="list-group-item list-group-item-action">
                             Newest
                           </a>
                           <a href="/tarot?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                             Staff Picks
                           </a>
                           <a href="/tarot?nR[sales][&gt;=][0]=100" class="list-group-item list-group-item-action">
                             Best Selling
                           </a>
                         </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="list-group">
                           <a href="/tarot?hFR[category][0]=Tarot" class="list-group-item list-group-item-action">
                             Tarot
                           </a>
                           <a href="/tarot?hFR[category][0]=Oracle" class="list-group-item list-group-item-action">
                             Oracle
                           </a>
                           <a href="/tarot?hFR[category][0]=Lenormand" class="list-group-item list-group-item-action">
                             Lenormand
                           </a>
                           <a href="/tarot" class="list-group-item list-group-item-action">
                             See All
                           </a>
                         </div>
                    </div>
                </div>
            </div>
            <a href="https://www.thegamecrafter.com/games/the-animism-tarot" class="badge badge-secondary department-image-credit">The Animism Tarot</a>`
        },
        {
            id : 'wargames',
            label : 'Wargames',
            search : true,
            nav : true,
            flyout : `<a href="/wargames"><img src="/tgc5/img/wargames/department-bkg.jpg"></a>
                   <div class="flynavcontent">
                       <div class="row">
                           <div class="offset-6 col-sm-6">
                               <h4 style="color: white;">Wargames</h4>
                               <div class="list-group">
                                  <a href="/wargames?nR[last_sale_date][&gt;=][0]=[% epoch - 60 * 60 * 24 * 90 %]" class="list-group-item list-group-item-action">
                                    What's Hot
                                  </a>
                                  <a href="/wargames?nR[date_published][&gt;=][0]=[% epoch - 60 * 60 * 24 * 120 %]" class="list-group-item list-group-item-action">
                                    Newest
                                  </a>
                                  <a href="/wargames?dFR[staff_pick][0]=1" class="list-group-item list-group-item-action">
                                    Staff Picks
                                  </a>
                                  <a href="/wargames?nR[sales][&gt;=][0]=5" class="list-group-item list-group-item-action">
                                    Best Selling
                                  </a>
                                  <a href="/wargames" class="list-group-item list-group-item-action">
                                    See All
                                  </a>
                                </div>
                           </div>
                       </div>
                   </div>
                   <a href="https://www.thegamecrafter.com/games/cows-vs-visitors-starter-set" class="badge badge-secondary department-image-credit">Cows vs Visitors</a>`
        },
    ],

    format_money (num) {
        num = isNaN(num) || num === '' || num === null ? 0.00 : num;
        return '$' + parseFloat(num).toFixed(2);
    },

    add_to_cart (sku_id, button, over18) {
        if (over18) {
          if (!confirm('This game is intended for adults only. Do you agree that you are 18 years old or older?')) {
            return ""; // don't add to cart
          }
        }
        //button.animate_from_to('#cartcount', {pixels_per_second: 500});
        var old_button_text = button.innerHTML;
    	button.innerHTML = 'Adding...';
        button.classList.add('btn-default');
        button.classList.remove('btn-success');
        axios({
            method:'post',
            url: wing.base_uri + '/api/cart//sku/'+sku_id,
            data : {quantity : 1},
        })
        .then(function (response) {
            _.forEach(document.getElementsByClassName('cartcount'), function(cartcount){
                cartcount.innerHTML = response.data.result.item_count;
                cartcount.classList.add('bulge');
                setTimeout(function() {
                    cartcount.classList.remove('bulge');
                }, 2000);

            });
            button.innerHTML = old_button_text;
            button.classList.remove('btn-default');
            button.classList.add('btn-success');
            wing.success('Item added to cart. <a href="/cart" class="btn btn-primary">View Cart</a>');
        });
    },
    /*
    add_to_wishlist (sku_id, el, wishlist_id) {
    	var button = $(el);
        var old_button_text = button.html();
    	button.html('Adding...');
        // api/wishlist/:order_id/sku/:sku_id/ :order_id could be "new", which will be handled server side
        var wishlist_url = 'wishlist/' + wishlist_id + '/sku/' +  sku_id;
        wing.ajax('POST', wishlist_url, {quantity : 1}, function(data, text_status, jqxhr) {
            button.html(old_button_text);
            var uri = data.result.web_uri;
            wing.success('Item added to wishlist. <a href="' + uri +'" class="btn btn-primary">View Wishlist</a>');
        });
    }
    */

    countries() {
        const countries = {
            keyed : {},
            sorted : [],
        };
        if (countries.sorted.length == 0) {
            axios.get(wing.base_uri + '/api/address/countries')
            .then(function (response) {
                countries.keyed = response.data.result;
                const unsorted = [];
                _.forIn(countries.keyed, function(country, code) {
                    unsorted.push( {
                        code: code,
                        name: country
                    })
                });
                //postsort by values
                countries.sorted = unsorted.sort( function (a,b) {
                    if (a.code < b.code) return -1;
                    if (a.code > b.code) return  1;
                });
            });
        }
        return countries;
    },

    states() {
        const states = {
            keyed : {},
            sorted : [],
        };
        if (states.sorted.length == 0) {
            axios.get(wing.base_uri + '/api/address/states')
            .then(function (response) {
                states.keyed = response.data.result;
                const unsorted = [];
                _.forIn(states.keyed, function(state, code) {
                    unsorted.push( {
                        code: code,
                        name: state
                    })
                });
                //postsort by values
                states.sorted = unsorted.sort( function (a,b) {
                    if (a.code < b.code) return -1;
                    if (a.code > b.code) return  1;
                });
            });
        }
        return states;
    },

    addresses(user_id, behavior) {
        if (user_id == null) {
            console.error('user_id required to load addresses');
            return null;
        }
        const addresses = {
            show_add_address : (typeof(behavior) !== 'undefined' && behavior.show_add_address) ? true : false,
            list : wing.object_list({
                list_api : wing.base_uri + '/api/user/'+user_id+'/addresses',
                create_api : wing.base_uri + '/api/address',
                on_create : (typeof(behavior) !== 'undefined' && typeof(behavior.on_create) !== 'undefined') ? behavior.on_create : function() {},
            }),
            countries : tgc.countries(),
            states : tgc.states(),
        };
        addresses.list._all();
        return addresses;
    },

    stripe(user_id, behavior) {
        if (user_id == null) {
            console.error('user_id required to load stripe cards');
            return null;
        }
        const stripe = {
            customer : null,
            show_add_card : false,
            countries : tgc.countries(),
            save_card() {
                var $form = document.getElementById('stripe-payment-form');
                Stripe.card.createToken($form, function(status, response) {
                    if (response.error) {
                        wing.error(response.error.message);
                    } else {
                        // response contains id and card, which contains additional card details
                        var token = response.id;
                        if (stripe.customer.id) {
                            axios.post(wing.base_uri + '/api/user/'+user_id+'/stripe/card', { token : token })
                            .then(function(response) {
                                const data = response.data;
                                stripe.show_add_card = false;
                                stripe.customer.cards.data.push(data.result);
                                stripe.selected_card_id = data.result.id;
                            });
                        }
                        else {
                            axios.post(wing.base_uri + '/api/user/'+user_id+'/stripe/token-to-customer', { token : token })
                            .then(function(response) {
                                const data = response.data;
                                stripe.show_add_card = false;
                                stripe.customer = data.result;
                                stripe.selected_card_id = data.result.default_card;
                            });
                        }
                    }
                });
                return false;
            },
            delete_card (card_id) {
                if (confirm('Are you sure you want to delete this card?')) {
                    axios.delete(wing.base_uri + '/api/user/'+user_id+'/stripe/card/'+card_id)
                    .then(function(response){
                        for (var i in stripe.customer.cards.data) {
                            var card = stripe.customer.cards.data[i];
                            if (card.id == card_id) {
                                stripe.customer.cards.data.splice(i, 1);
                                wing.success('Card deleted.');
                                continue;
                            }
                        }
                    });
                }
            },
        };
        axios({
            method:'get',
            url: wing.base_uri + '/api/user/'+user_id+'/stripe/customer',
        })
        .then(function (response) {
            stripe.customer = response.data.result;
            if (typeof behavior != 'undefined' && 'on_success' in behavior) {
                behavior.on_success(response.data.result);
            }
        });
        return stripe;
    },

};

Vue.component('stripe-cards', {
      template : `<select v-if="stripe != null && stripe.customer != null && stripe.customer.cards != null && stripe.customer.cards.data.length > 0" name="stripe_card_id" class="form-control" v-model="object.properties[property]">
              <option v-for="card in stripe.customer.cards.data" :value="card.id">{{card.brand}} ending in {{card.last4}} (expires {{card.exp_month}}/{{card.exp_year}})</option>
          </select>`,
      props : ['stripe','object','property'],
});

Vue.component('stripe-cards-value', {
      template : `<select v-if="stripe != null && stripe.customer != null && stripe.customer.cards != null && stripe.customer.cards.data.length > 0" name="stripe_card_id" class="form-control" v-model="model">
              <option v-for="card in stripe.customer.cards.data" :value="card.id">{{card.brand}} ending in {{card.last4}} (expires {{card.exp_month}}/{{card.exp_year}})</option>
          </select>`,
      props : ['stripe','model'],
});


Vue.component('show-stripe-card-form', {
      template : `<b-button v-if="stripe != null" variant="primary" size="sm" :pressed.sync="stripe.show_add_card">Add A Credit Card</b-button>`,
      props : ['stripe'],
});

Vue.component('stripe-card-form', {
      template : `<form id="stripe-payment-form" v-if="stripe != null">
              <div class="card">
                <h4 class="card-header">Add A Card</h4>
                <div class="card-body">
                      <p class="stripe-payment-errors text-danger"></p>

                      <div class="form-group">
                          <label>Name On Card</label>
                          <input type="text" size="100" class="form-control" data-stripe="name">
                      </div>

                      <div class="form-group">
                          <label>Card Number</label>
                              <input type="text" size="20" class="form-control" data-stripe="number">
                      </div>

                      <div class="form-group">
                          <label>CVC</label>
                          <div class="row">
                              <div class="col"><input type="text" size="4" class="form-control" data-stripe="cvc"></div>
                              <div class="col">
                                <small id="cvctooltip" class="text-muted form-text">What's this?</small>
                                <b-popover :show.sync="showtooltip" target="cvctooltip" placement="top" title="CVC Explained" triggers="hover click">
                                  <img :src="base_uri + '/tgc6/img/securitycode.png'" class="img-fluid" alt="cvc help">
                                </b-popover>
                              </div>
                          </div>
                      </div>

                      <div class="form-group">
                          <label>Expiration (MM/YYYY)</label>
                          <div class="row">
                              <div class="col-5"><input type="text" size="2" class="form-control" data-stripe="exp-month" :value="new Date() | moment('MM')"></div>
                              <div class="col-1">/</div>
                              <div class="col-6"><input type="text" size="4" class="form-control" data-stripe="exp-year" :value="new Date() | moment('YYYY')"></div>
                          </div>
                      </div>

                      <div class="form-group">
                          <label>Address Line 1</label>
                              <input type="text" size="100" class="form-control" data-stripe="address_line_1">
                      </div>

                      <div class="form-group">
                          <label>Address Line 2</label>
                              <input type="text" size="100" class="form-control" data-stripe="address_line_2">
                      </div>

                      <div class="form-group">
                          <label>City</label>
                              <input type="text" size="100" class="form-control" data-stripe="address_city">
                      </div>

                      <div class="form-group">
                          <label>State (US Only)</label>
                              <input type="text" size="100" class="form-control" data-stripe="address_state">
                      </div>

                      <div class="form-group">
                          <label>Zip/Postal Code</label>
                              <input type="text" size="100" class="form-control" data-stripe="address_zip">
                      </div>

                      <div class="form-group">
                          <label>Country</label>
                          <select data-stripe="address_country" name="country" id="country" class="form-control" v-model="country">
                                <option v-for="country in stripe.countries.sorted" :value="country.code">{{country.name}}</option>
                          </select>
                      </div>

                      <div class="form-group">
                            <button class="btn btn-success" @click="stripe.save_card()" type="button"><i class="far fa-credit-card"></i> Save Card</button>
                      </div>
                  </div>
              </div>
          </form>
      `,
      props : ['stripe'],
      data () {
          return { showtooltip : false, country : 'US', base_uri : wing.base_uri  }
      },
});

Vue.component('format-address', {
  template : `<div v-if="properties != null">{{properties.name}}<br>
      <template v-if="properties.company">{{properties.company}}<br></template>
      {{properties.address1}}<br>
      <template v-if="properties.address2">{{properties.address2}}<br></template>
      {{properties.city}}, {{properties.state}} {{properties.postal_code}}<br>
      {{properties.country}}<br>
      <template v-if="properties.phone_number">{{properties.phone_number}}<br></template>
    </div>`,
  props: ['properties'],
});

Vue.component('show-address-form', {
      template : `<b-button v-if="addresses != null" variant="primary" size="sm" :pressed.sync="addresses.show_add_address"><i class="fas fa-map-marker-alt"></i> Add An Address</b-button>`,
      props : ['addresses'],
});

Vue.component('address-form', {
      template : `<form v-if="addresses != null">
              <div class="card">
                <h4 class="card-header">Add An Address</h4>
                <div class="card-body">

                      <div class="form-group">
                          <label>Name</label>
                          <input type="text" size="100" class="form-control" v-model="new_address.name">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>Company</label>
                          <input type="text" size="100" class="form-control" v-model="new_address.company">
                      </div>

                      <div class="form-group">
                          <label>Address Line 1</label>
                          <input type="text" size="100" class="form-control" v-model="new_address.address1">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>Address Line 2</label>
                          <input type="text" size="100" class="form-control" v-model="new_address.address2">
                      </div>

                      <div class="form-group">
                          <label>City</label>
                          <input type="text" size="100" class="form-control" v-model="new_address.city">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>State / Province</label>
                          <select class="form-control" v-model="new_address.state" v-if="new_address.country == 'US'">
                                <option v-for="state in addresses.states.sorted" :value="state.code">{{state.name}}</option>
                          </select>
                          <input type="text" size="100" class="form-control" v-model="new_address.state" v-if="new_address.country != 'US'">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>Country</label>
                          <select class="form-control" v-model="new_address.country">
                                <option v-for="country in addresses.countries.sorted" :value="country.code">{{country.name}}</option>
                          </select>
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>Postal Code / Zip Code</label>
                          <input type="text" size="15" class="form-control" v-model="new_address.postal_code">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label>Phone Number</label>
                          <input type="text" size="20" class="form-control" v-model="new_address.phone_number">
                          <small class="text-muted form-text">Required</small>
                      </div>

                      <div class="form-group">
                          <label class="col-sm-4"></label>
                          <div class="col-sm-8">
                              <button class="btn btn-success" @click="create()" type="button">Save Address</button>
                          </div>
                      </div>
                  </div>
              </div>
          </form>
      `,
      props : ['addresses'],
      data () {
          return {
              new_address : {},
          }
      },
      methods : {
          create() {
              const self = this;
              self.addresses.list.create(self.new_address, { on_success(properties, index) {
                  wing.success(properties.name + ' saved.');
                  self.reset();
                  self.addresses.show_add_address = false;
              }});
          },
          reset() {
              this.new_address = {
                  name : '',
                  company : '',
                  address1 : '',
                  address2 : '',
                  city : '',
                  postal_code : '',
                  phone_number : '',
                  state: '',
                  country : 'US',
              };
          }
      },
      mounted(){
          this.reset();
      }
});

Vue.component('select-address', {
  template : `<select class="form-control" v-if="addresses.list.objects.length > 0" v-model="object.properties[property]" :id="property">
          <option v-for="address in orderBy(addresses.list.objects, 'properties.name')" :value="address.properties.id">
            {{address.properties.name}},
            <template v-if="address.properties.company">{{address.properties.company}},</template>
            {{address.properties.address1}},
            <template v-if="address.properties.address2">{{address.properties.address2}},</template>
            {{address.properties.city}}, {{address.properties.state}} {{address.properties.postal_code}},
            {{address.properties.country}}
          </option>
      </select>`,
  props : ['user_id','object','property','addresses'],
});

Vue.component('flynav', {
    template : `<nav class="flynav" v-if="fly(state.over)" @mouseenter="overfly(true)" @mouseleave="overfly(false)"><span v-html="state.content"></span></nav>`,
    props: ['state'],
    methods : {
        overfly (on) {
            const self = this;
            self.state.on = on;
            if (on) {
                clearTimeout(self.state.hide);
            }
            else {
                self.state.over = null;
            }
        },
        fly (id) {
            return this.state.over == id && id != null && this.state.content != null;
        }
    }
});

tgc.sitenav = new Vue({
    el:'#sitenav',
    data : {
        searchbar : {
            current : {
                label : 'All',
                url : '/search',
                id : 'search'
            },
            params : {
                q : wing.get_query_param('q'),
            },
        },
        flynav :  {over : null, on : false, hide : null, content : null},
        departments : tgc.departments,
        stickycart : 70,
        navbarcart : null,
    },
    methods : {
        init() {
            const self = this;
            self.focus_search();

            _.forEach(document.getElementsByClassName('flynav'), function(el){
                el.classList.remove('hidden');
            });

            self.navbarcart = document.getElementById("navbarcart");
            window.onscroll = function() {self.floatnavbarcart()};
        },
        set_search(dept) {
            this.searchbar.current.label = dept.label;
            this.searchbar.current.id = dept.id;
            this.searchbar.current.url = '/'+dept.id;
            this.focus_search();
        },
        set_search_and_redirect(dept) {
            this.set_search(dept);
            this.redirect_search();
        },
        focus_search() {
            document.getElementById('search_query').focus();
        },
        redirect_search() {
            const self = this;
            const re = new RegExp(self.searchbar.current.url+'$');
            if (!window.location.pathname.match(re)) {
                let path = '/'+self.searchbar.current.id;
                if (self.searchbar.params.q != null) {
                    path += '?q='+self.searchbar.params.q;
                }
                wing.info(self.searchbar.current.id + ' :: '+ window.location.pathname);
                window.location.href = path;
            }
            this.focus_search();
        },
        overnav (deptartment) {
            const self = this;
            if (self.flynav.hide != null) {
                clearTimeout(self.flynav.hide);
            }
            self.flynav.hide = setTimeout(function() {
                self.flynav.over = (deptartment == null) ? null : deptartment.id;
                self.flynav.content = (deptartment == null) ? null : deptartment.flyout;
            },200);
        },
        floatnavbarcart() {
            const self = this;
            if (window.pageYOffset >= self.stickycart) {
                self.navbarcart.classList.add("navbarcartfixed");
            } else {
                self.navbarcart.classList.remove("navbarcartfixed");
            }
        },
    },
});

tgc.sitefooter = new Vue({
    el:'#sitefooter',
    computed : {
        year: () => { return (new Date()).getFullYear() }
    }
});


Vue.component('sku-notify', {
    template : `<span>
        <div id="sku_waiting" class="btn-group" v-if="!on_list">
            <button class="btn btn-lg btn-success" @click="notify_me();"><i class="fas fa-envelope"></i> Email me when I can buy</button>
        </div>
        <div id="never_mind_sku" class="btn-group" v-if="on_list">
            <button class="btn btn-lg btn-danger" @click="drop_notification();"><i class="fas fa-envelope"></i> Cancel notification</button>
        </div>
    </span>`,
    data() {
        return {
            on_list : false
        };
    },
    props : ['sku'],
    methods : {
      notify_me() {
          const self = this;
          axios({
              method:'put',
              url: wing.base_uri + '/api/sku/'+self.sku+'/on-waiting-list',
              data : {},
          })
          .then(function (response) {
              self.on_list = true;
              wing.success('You will be notified by email when this item is available to buy.');
          });
      },
      drop_notification() {
          const self = this;
          axios({
              method:'delete',
              url: wing.base_uri + '/api/sku/'+self.sku+'/on-waiting-list',
              data : {},
          })
          .then(function (response) {
              self.on_list = false;
              wing.success('Your notification has been cancelled.');
          });
      },
    },
   mounted() {
      const self = this;
      axios({
          method:'get',
          url: wing.base_uri + '/api/sku/'+self.sku+'/on-waiting-list',
          data : {},
      })
      .then(function (response) {
          self.on_list = response.data.result.on_waiting_list == 1;
      });
   }
});

tgc.instantsearch_autohide = function(id) {
    return {
        render: function(options) {
            if (options.results.hits.length > 0) {
                document.getElementById(id).classList.remove('hidden');
            }
            else {
                document.getElementById(id).classList.add('hidden');
            }
        }
    }
};

Vue.component('showcase', {
    template : `<b-carousel id="showcase-carousel" class="bg-dark" controls indicators interval="4000">
        <b-carousel-slide v-for="item in items">
            <a slot="img" class="position-relative d-block" :style="'height: '+height+'px;'" :href="item.shop_uri">
                <img :src="item.backdrop.file_uri" alt="showcase backdrop" class="w-100" :style="'margin-top: '+top_offset+'px;'">
                <div class="position-absolute w-100" style="top: 50%; left: 0; transform: translateY(-50%);">
                    <div class="logomask ml-auto mr-auto position-relative d-block text-center" style="width: 500px;">
                        <img :src="item.logo.file_uri" alt="logo" :title="'logo for '+item.name">
                        <div class="text-light bg-secondary d-none d-md-block">{{item.short_description}}</div>
                    </div>
                </div>
            </a>
        </b-carousel-slide>
    </b-carousel>`,
    props: ['items'],
    data() {
        return {
            height : 300,
            top_offset : 150,
        };
    },
    methods : {
        measure_screen_width() {
            const self = this;
            const screen_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            const delta_screen_width = screen_width - 500;
            const delta_showcase_height = Math.round(delta_screen_width / 7.5);
            self.height = 150 + delta_showcase_height;
            let multiple = 6 - (screen_width / 500);
            if (multiple < 1) {
                multiple = 1;
            }
            self.top_offset = Math.round(self.height / multiple) * -1;
        },
    },
    mounted() {
        const self = this;
        self.measure_screen_width();
        self.$nextTick(() => {
            window.addEventListener('resize', () => {
                self.measure_screen_width();
            });
        })
    },
});
