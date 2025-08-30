package com.food.controller;

import com.food.model.Food;
import com.food.model.Restaurant;
import com.food.model.User;
import com.food.request.CreateFoodRequest;
import com.food.service.FoodService;
import com.food.service.RestaurantService;
import com.food.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/foods")
public class FoodController {

    @Autowired
    private FoodService foodService;

    @Autowired
    UserService userService;

    @Autowired
    RestaurantService restaurantService;


    @GetMapping
    public ResponseEntity<List<Food>> searchFood(@RequestParam String keyword,
                                           @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Food> foods = foodService.searchFood(keyword);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }


    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<Food>> getResFood(@PathVariable Long id,
                                                 @RequestParam boolean vegetarian,
                                                 @RequestParam boolean seasonal,
                                                 @RequestParam boolean nonVeg,
                                                 @RequestParam(required = false) String categoryName,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Food> foods = foodService.getRestaurantFood(id, vegetarian, nonVeg, seasonal, categoryName);

        return new ResponseEntity<>(foods, HttpStatus.OK);
    }


}
