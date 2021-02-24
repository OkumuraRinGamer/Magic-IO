package com.magicio.resources;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

@Component
public class Imagem {
    @Value("${camiseta.imagem.raiz}")
    private String raiz;

    @Value("${camiseta.imagem.diretorio}")
    private String diretorioImagem;

    public String salvarImagem(MultipartFile imagem){
        return this.salvar(this.diretorioImagem, imagem);
    }

    private String salvar(String diretorio, MultipartFile imagem){
        Date date =  new Date();
        Path diretorioPath = Paths.get(this.raiz, diretorio);
        Path arquivoPath = diretorioPath.resolve(date.getTime()+"-"+imagem.getOriginalFilename());

        try {
            Files.createDirectories(diretorioPath);
            imagem.transferTo(arquivoPath.toFile());
            return "http://localhost:8080/images/"+date.getTime()+"-"+imagem.getOriginalFilename();
        } catch (Exception e) {
            return null;
        }
    }


}

