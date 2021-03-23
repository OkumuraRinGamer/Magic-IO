package com.magicio.core.resources;

import java.io.IOException;
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

    public String salvarImagem(MultipartFile imagem) {
        return this.salvar(this.diretorioImagem, imagem);
    }

    private String salvar(String diretorio, MultipartFile imagem) {
        Date date = new Date();
        Path diretorioPath = Paths.get(this.raiz, diretorio);
        Path arquivoPath = diretorioPath.resolve(date.getTime() + "-" + imagem.getOriginalFilename());

        try {
            Files.createDirectories(diretorioPath);
            imagem.transferTo(arquivoPath.toFile());
            return date.getTime() + "-" + imagem.getOriginalFilename();
        } catch (Exception e) {
            return null;
        }
    }

    protected boolean deletar(String nomeImg) {
        Path path = Paths.get(raiz + "/" + diretorioImagem + "/" + nomeImg);
        try {
            Files.deleteIfExists(path);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return true;
    }

}
