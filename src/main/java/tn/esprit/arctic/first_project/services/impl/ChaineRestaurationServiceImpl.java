package tn.esprit.arctic.first_project.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.arctic.first_project.entities.ChaineRestauration;
import tn.esprit.arctic.first_project.repositories.ChaineRestaurationRepository;
import tn.esprit.arctic.first_project.services.ChaineRestaurationService;

import java.util.List;

@Service
@AllArgsConstructor
public class ChaineRestaurationServiceImpl implements ChaineRestaurationService {

    private ChaineRestaurationRepository chaineRestaurationRepository;

    @Override
    public ChaineRestauration save(ChaineRestauration chaineRestauration) {
        return chaineRestaurationRepository.save(chaineRestauration);
    }

    @Override
    public ChaineRestauration update(ChaineRestauration chaineRestauration) {
        return chaineRestaurationRepository.save(chaineRestauration);
    }

    @Override
    public void delete(Long id) {
        chaineRestaurationRepository.deleteById(id);
    }

    @Override
    public ChaineRestauration findById(Long id) {
        return chaineRestaurationRepository.findById(id).orElse(null);
    }

    @Override
    public List<ChaineRestauration> findAll() {
        return chaineRestaurationRepository.findAll();
    }
}