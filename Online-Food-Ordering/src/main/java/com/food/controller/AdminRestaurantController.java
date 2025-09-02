package com.food.controller;

import com.food.model.Restaurant;
import com.food.model.User;
import com.food.request.CreateRestaurantRequest;
import com.food.response.MessageResponse;
import com.food.service.RestaurantService;
import com.food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;


    @PostMapping
    public ResponseEntity<Restaurant> createRestaurant( //done
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.createRestaurant(req, user);

        return new ResponseEntity<>(restaurant,HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant( //done
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {

        Restaurant restaurant = restaurantService.updateRestaurant(id, req);

        return new ResponseEntity<>(restaurant,HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant( //done
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {

       restaurantService.deleteRestaurant(id);

       MessageResponse res = new MessageResponse();
       res.setMessage("Restaurant deleted successfully");

        return new ResponseEntity<>(res,HttpStatus.OK);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus( //done
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {

        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);

        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }


    @GetMapping("/user")
    public ResponseEntity<Restaurant> findRestaurantByUserId( //done
            @RequestHeader("Authorization") String jwt
    ) throws Exception {

        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(user.getId());

        return new ResponseEntity<>(restaurant,HttpStatus.OK);
    }
}
