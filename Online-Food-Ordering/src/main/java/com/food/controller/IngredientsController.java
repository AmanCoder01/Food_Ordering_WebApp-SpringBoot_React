package com.food.controller;

import com.food.model.IngredientCategory;
import com.food.model.IngredientsItem;
import com.food.request.IngredientCategoryRequest;
import com.food.request.IngredientsItemRequest;
import com.food.service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientsController {

    @Autowired
    private IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredients(@RequestBody IngredientCategoryRequest req,
                                                                @RequestHeader("Authorization") String jwt) throws Exception {
        IngredientCategory ingredientsCategory = ingredientsService.createIngredientsCategory(req.getName(), req.getRestaurantId());

        return new ResponseEntity<>(ingredientsCategory, HttpStatus.CREATED);
    }


    @PostMapping
    public ResponseEntity<IngredientsItem> createIngredientsItem(@RequestBody IngredientsItemRequest req,
                                                                @RequestHeader("Authorization") String jwt) throws Exception {
        IngredientsItem ingredientsItem = ingredientsService.createIngredientsItem(req.getRestaurantId(), req.getName(), req.getCategoryId());

        return new ResponseEntity<>(ingredientsItem, HttpStatus.CREATED);
    }


    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updateStock(@PathVariable Long id,
                                                                 @RequestHeader("Authorization") String jwt) throws Exception {
        IngredientsItem ingredientsItem = ingredientsService.updateStock(id);

        return new ResponseEntity<>(ingredientsItem, HttpStatus.CREATED);
    }



    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getRestaurantIngredients(@PathVariable Long id,
                                                       @RequestHeader("Authorization") String jwt) throws Exception {
        List<IngredientsItem> restaurantIngredients = ingredientsService.findRestaurantIngredients(id);

        return new ResponseEntity<>(restaurantIngredients, HttpStatus.CREATED);
    }


    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientCategory>> getRestaurantIngredientCategory(@PathVariable Long id,
                                                                          @RequestHeader("Authorization") String jwt) throws Exception {
        List<IngredientCategory> ingredientCategories = ingredientsService.findIngredientsCategoryByRestaurantId(id);

        return new ResponseEntity<>(ingredientCategories, HttpStatus.CREATED);
    }
}
