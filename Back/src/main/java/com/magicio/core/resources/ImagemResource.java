package com.magicio.core.resources;

import com.magicio.core.Controller.ResponseAbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/imagem")
public class ImagemResource extends ResponseAbstractController {

    @Autowired
    private Imagem imagem;

    @PostMapping
    public ResponseEntity<?> upload(@RequestParam MultipartFile file) {

        return new ResponseEntity<>(imagem.salvarImagem(file), HttpStatus.OK);

    }

    @DeleteMapping("{nomeImg:.+}")
    public ResponseEntity<?> delete(@PathVariable String nomeImg) {
        return new ResponseEntity<>(imagem.deletar(nomeImg), HttpStatus.OK);
    }

}